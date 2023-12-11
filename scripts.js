function uploadImage() {
  const fileInput = document.getElementById('uploadInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = new Image();
      image.src = e.target.result;

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('imageContainer');
      imageContainer.appendChild(image);

      document.getElementById('imageGallery').appendChild(imageContainer);
    }

    reader.readAsDataURL(file);
  }
}
