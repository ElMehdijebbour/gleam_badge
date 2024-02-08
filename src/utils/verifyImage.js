// Use this code in verifyImage.js

/**
 * Verify the dimensions and transparency of the selected image file.
 * 
 * @param {File} imageFile - The image file to verify.
 * @returns {Promise<boolean>} A promise that resolves with a boolean indicating whether the image meets the requirements.
 */
export async function verifyImage(imageFile) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      // Check if image dimensions are 512x512
      if (img.width !== 512 || img.height !== 512) {
        resolve(false);
        return;
      }

      // Create a canvas to check transparency
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Check transparency in circular region
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width / 2;
      const radiusSquared = radius * radius;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const dx = x - centerX;
          const dy = y - centerY;
          if (dx * dx + dy * dy <= radiusSquared) {
            const pixelData = ctx.getImageData(x, y, 1, 1).data;
            if (pixelData[3] === 0) { // Check alpha value (transparency)
              resolve(false);
              return;
            }
          }
        }
      }
      // If image passes all checks, resolve as true
      resolve(true);
    };
    img.onerror = () => resolve(false);
    img.src = URL.createObjectURL(imageFile);
  });
}
