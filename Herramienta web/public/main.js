window.onload = () => {
    document.getElementById("audio-input").onchange = () => {
        const code = document.getElementById('interview-code').value;
        if (code === '') {
            document.getElementById('audio-input').value = null;
            return alert('No code entered.');
        }
        const files = document.getElementById('audio-input').files;
        const file = files[0];
        if(file == null){
            return alert('No file selected.');
        }
        getSignedRequest(file, code);
    };
};

function getSignedRequest(file, code){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/get-signed-url?file-name=${file.name}&file-type=${file.type}&code=${code}`);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                uploadFile(file, response.signedRequest);
            }
            else{
                alert('Could not get signed URL.');
            }
        }
    };
    xhr.send();
}

function uploadFile(file, signedRequest){
    document.getElementById('status').innerText = 'Uploading file...';
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            console.log(xhr);
            if(xhr.status === 200){
                document.getElementById('status').innerText = 'File Upload Success.';
            }
            else{
                document.getElementById('status').innerText = 'Could not upload file.';
            }
        }
    };
    xhr.send(file);
}