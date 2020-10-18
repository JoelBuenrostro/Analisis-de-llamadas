$(document).ready(function(){

    $('form').on('submit', function(event){

        event.preventDefault();
        var formData = new FormData($('form')[0]);

        $.ajax({
            xhr: function(){
                var xhr = new XMLHttpRequest();

                xhr.upload.addEventListener('progress', function(file){

                    if (file.lengthComputable){

                        console.log('Bytes loaded:' + file.loaded);
                        console.log('Total size: ' + file.total);
                        console.log('Percentage uploaded: ' + (file.loaded / file.total));
                        var percentage = 100 * (file.loaded / file.total);
                        console.log(`${percentage}%`)
                        document.getElementById('progressBar').style.width = `${percentage}%`;
                        document.getElementById('progressBar').innerHTML = `${percentage}%`;
                    };

                });

                return xhr;
            },
            type: 'POST',
            url: '',
            data: formData,
            processData: false,
            contentType: false,
            success: function(){
            }

        });

    });

});