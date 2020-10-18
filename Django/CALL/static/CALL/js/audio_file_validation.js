var contadorarchivos=0;
const audio_file_input = document.querySelector('#audio-input');
const preview = document.querySelector('.preview');
console.log(audio_file_input);
console.log(preview);
// audio_file_input.style.opacity = 0;

audio_file_input.addEventListener('input', updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = audio_file_input.files;
  var longituddearchivos=curFiles.length;
  if (curFiles.length === 0) {
    const para = document.createElement('p');
    para.textContent = 'No has seleccionado ningún archivo';
    preview.appendChild(para);
  } else {
    const list = document.createElement('ol');
    list.classList.add("list-group");
    list.classList.add("list-of-audios");
    preview.appendChild(list);

    for (const file of curFiles) {
      contadorarchivos=contadorarchivos+1;
      const listItem = document.createElement('li');
      listItem.classList.add("list-group-item");
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `${file.name}, ${returnFileSize(file.size)}.`;
        listItem.appendChild(para);
       /*  document.getElementById("obtenerlongitud").id=`obtenerlongitud_${contadorarchivos}`; */
      } else {
        para.textContent = `${file.name}: Este formato no es válido, por favor selecciona un archivo de audio (.wav)`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
    console.log(longituddearchivos)
    var arregloaudios=[];

    for(x=0; x<longituddearchivos;x++){
      console.log(curFiles.item(x).name)
     arregloaudios[x]= curFiles.item(x).name;
     console.log(x);
    }

    console.log(arregloaudios)
    localStorage.setItem("Nombre", longituddearchivos);
    localStorage.setItem("nombre_audio",JSON.stringify(arregloaudios));
  }
}

const fileTypes = [
  "audio/wav",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + 'bytes';
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB';
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + 'MB';
  }
}

/*  $(document).ready(function() {
  function changeNumber() {
      $.ajax({
          type: "GET",
         url: "https://django-call-storage.s3.us-east-2.amazonaws.com/transcript/Llamada3.json",
      success: function(data) {
             $("#url").html(data);
          }
      });
  }
  setInterval(changeNumber, 5000);
 }) */