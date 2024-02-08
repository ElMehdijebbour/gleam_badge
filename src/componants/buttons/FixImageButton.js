import React from 'react';
import './Buttons.css'; // Import the CSS file for styling

/**
 * FixImageButton component represents a button for fixing images.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {function} props.onButtonClick - The callback function to execute when the button is clicked.
 * @returns {JSX.Element} JSX representation of the FixImageButton component.
 */
function FixImageButton({ text, onButtonClick }) {
  return (
    <a href="#" className="button button--pen" onClick={onButtonClick}>
      <div className="button__wrapper">
        <span className="button__text">{text}</span>
      </div>
      <div className="characterBox">
        <div className="character wakeup">
          <div className="character__face"></div>
          <div className="charactor__face2"></div> {/* Note: Check if it should be "character__face2" for consistency */}
        </div>
        <div className="character wakeup">
          <div className="character__face"></div>
          <div className="charactor__face2"></div>
        </div>
        <div className="character">
          <div className="character__face"></div>
          <div className="charactor__face2"></div>
        </div>
      </div>
    </a>
  );
}

export default FixImageButton;
