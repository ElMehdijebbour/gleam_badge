// Use this code in convertImageToObject.js

/**
 * Convert the selected image file to an object URL.
 * 
 * @param {File} imageFile - The image file to convert.
 * @returns {Promise<string>} A promise that resolves with the object URL of the converted image.
 */
export async function convertImageToObject(imageFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        try {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((blob) => {
            const newImgUrl = URL.createObjectURL(blob);
            resolve(newImgUrl); // Resolve with the blob URL
          }, 'image/png');
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
