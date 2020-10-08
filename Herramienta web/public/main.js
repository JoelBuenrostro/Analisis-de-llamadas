window.onload = () => {
    document.getElementById("audio-input").onchange = () => {
        const code = document.getElementById('interview-code').nodeValue;
        if (code === '') {
            document.getElementById('audio-input').value = null;
            return alert('No code entered.');
        }
        const files = document.getElementById('audio-input').files;
        const file = files[0];
        if (file == null) {
            return alert('No file selected');
        }
        getSignedRequest(file, code);
    };
};