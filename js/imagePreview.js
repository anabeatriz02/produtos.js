'use strict';


const imagePreview = (idFile, idImage) => {
    const file = document.getElementById(idFile).files[0];
    const preview = document.getElementById(idImage);
    const fileReader = new FileReader();

    if (file) {
        fileReader.readAsDataURL(file);
    } else {
        preview.scr = "./img/foto.png";
    }

    fileReader.onloadend = () => preview.src = fileReader.result
};

export { imagePreview };