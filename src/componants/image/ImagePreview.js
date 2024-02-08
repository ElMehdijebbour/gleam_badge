// File: src/components/ImagePreview.js

import React from 'react';

/**
 * ImagePreview component displays a preview of an image.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.imageSrc - The source URL of the image to preview.
 * @returns {JSX.Element} JSX representation of the ImagePreview component.
 */
function ImagePreview({ imageSrc }) {
  return (
    <div className="avatar-preview">
      {/* Render the image preview */}
      <img src={imageSrc} alt="Avatar Preview" className="avatar-image" />
    </div>
  );
}

export default ImagePreview;
