// File: src/components/UploadButton.js

import React from 'react';
import './UploadButton.css'; // Import the CSS file for styling

/**
 * UploadButton component represents a button for uploading files.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {function} props.onButtonClick - The callback function to execute when the button is clicked.
 * @returns {JSX.Element} JSX representation of the UploadButton component.
 */
function UploadButton({ text, onButtonClick }) {
  return (
    <button type="button" className="button button--piyo" onClick={onButtonClick}>
        {/* Render the button text */}
        <div className="button__wrapper">
            <span className="button__text">{text}</span>
        </div>
        {/* Render the character box */}
        <div className="characterBox">
            <div className="character wakeup">
                <div className="character__face"></div>
            </div>
            <div className="character wakeup">
                <div className="character__face"></div>
            </div>
            <div className="character">
                <div className="character__face"></div>
            </div>
        </div>
    </button>
  );
}

export default UploadButton;
