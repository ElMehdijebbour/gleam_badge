async function convertImageToObject(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function (e) {
      const img = new Image();
      img.onload = async function () {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const aspectRatio = img.width / img.height;
          const targetWidth = 512;
          const targetHeight = Math.round(512 / aspectRatio);
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = {
            width: canvas.width,
            height: canvas.height,
            data: imageData.data,
            format: 'rgba'
          };
          resolve(data);
        } catch (error) {
          console.error('Error converting image:', error);
          reject(error);
        }
      };
      img.onerror = (error) => {
        console.error('Error loading image:', error);
        reject(error);
      };
      img.src = e.target.result;
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      reject(error);
    };
    reader.readAsDataURL(imageFile);
  });
}

export default convertImageToObject;
