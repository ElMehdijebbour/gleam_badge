// File: src/components/Avatar.js

import React from 'react';
import './Avatar.css'; // Import the CSS file for styling
import baseAvatar from '../../assets/base_avatar.png'; // Import the base avatar image

/**
 * Avatar component displays a basic avatar image.
 * 
 * @returns {JSX.Element} JSX representation of the Avatar component.
 */
const Avatar = () => {
  return (
    <div className="avatar-container">
      {/* Render the base avatar image */}
      <img src={baseAvatar} alt="Base Avatar" className="base-avatar" />
    </div>
  );
};

export default Avatar;
