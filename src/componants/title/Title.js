// Import React and the CSS file for styling
import React from 'react';
import './Title.css'; // Make sure to create this CSS file for additional styling

// Functional component for the title
const Title = () => {
  return (
    <div className="title-container"> {/* Container for the title */}
      <h1 className="main-title"> {/* Main title with two spans for different colors */}
        <span className="yellow-text">Badge</span> {/* Yellow text */}
        <span className="white-text">maker</span> {/* White text */}
      </h1>
      <p className="subtitle">Build your badge with one CLICK</p> {/* Subtitle */}
    </div>
  );
};

export default Title; // Export the Title component
