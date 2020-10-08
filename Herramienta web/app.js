const express = require('express');
const aws = require('aws-sdk');

const app = express();
app.set('views', './views');
app.use(express.static('./public'));
app.engine('html', require('ejs').renderFile);
app.listen(process.env.PORT || 3000); // Listen to 3000 if server doesn't provide a port

const S3_BUCKET = process.env.S3_BUCKET || 'pl-transcribe-recordings';
if (process.env.AWS_ACCESSKEY) { // Is this provided from the Beanstalk?
    aws.config.update({
        secretAccessKey: process.env.AWS_SECRETKEY,
        accessKeyId: process.env.AWS_ACCESSKEY,
        region: process.env.AWS_REGION
    });
} else { // If not use our local credentials
    var credentials = new aws.SharedIniFileCredentials({ profile: 'pl-user' });
    aws.config.credentials = credentials;
    aws.config.region = 'us-east-1';
}

// Attach our index file to a route to render it for us
// This is where our users will go
app.get('/interview-upload', (req, res) => res.render('index.html'));

//route to give us a temp signed url for uploading directly to s3
app.get('/get-signed-url', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const code = req.query['code'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: `${code}_${fileName}`,
        Expires: 60,
        ContentType: fileType,
        ACL: 'private'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data
        };
        res.write(JSON.stringify(returnData));
        res.end();
    });
});