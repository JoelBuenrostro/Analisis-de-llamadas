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
      const listItem = document.createElement('li');
      listItem.classList.add("list-group-item");
      const para = document.createElement('p');
      if (validFileType(file)) {
        para.textContent = `${file.name}, ${returnFileSize(file.size)}.`;
        listItem.appendChild(para);
      } else {
        para.textContent = `${file.name}: Este formato no es válido, por favor selecciona un archivo de audio (.wav)`;
        listItem.appendChild(para);
      }
      list.appendChild(listItem);
    }
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