// File: src/utils/verifyImage.js

async function verifyImage(imageFile) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      if (img.width !== 512 || img.height !== 512) {
        resolve(false);
        return;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

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
            const alpha = pixelData[3];
            if (alpha === 0) {
              resolve(false);
              return;
            }
          }
        }
      }
      resolve(true);
    };
    img.onerror = () => resolve(false);
    img.src = URL.createObjectURL(imageFile);
  });
}

export default verifyImage;
