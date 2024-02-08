import React, { useState } from 'react';
import verifyImage from '../../utils/verifyImage';
import convertImageToObject from '../../utils/convertImageToObject'; // Import convertImageToObject function
import ImagePreview from './ImagePreview';
import placeholderImg from '../../assets/placeholder.png';
import './ImageUpload.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UploadButton from '../buttons/UploadButton'; // Import the UploadButton component

function ImageUpload() {
  // Define state variables using the useState hook
  const [imageSrc, setImageSrc] = useState(placeholderImg); // State to store the image source
  const [errorMessage, setErrorMessage] = useState(''); // State to store error messages
  const [convertedImage, setConvertedImage] = useState(null); // State to store converted image data

  // Function to handle image change event
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const isVerified = await verifyImage(file); // Verify the selected image
      if (isVerified) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setImageSrc(e.target.result); // Set the image source if it meets the requirements
        };
        reader.readAsDataURL(file); // Read the image file as a data URL
        setErrorMessage(''); // Reset error message if the image meets the requirements
      } else {
        setErrorMessage('The image does not meet the requirements.'); // Set error message if image doesn't meet requirements
      }
    }
  };

  // Function to handle fixing the image
  const handleFixImage = async () => {
    try {
      const convertedImage = await convertImageToObject(imageSrc); // Convert the image to an object
      console.log('Converted image:', convertedImage); // Log the converted image data
      setConvertedImage(convertedImage); // Store converted image data in state
    } catch (error) {
      console.error('Error converting image:', error); // Log error if conversion fails
      setErrorMessage('Error converting the image.'); // Set error message if conversion fails
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="image-upload-container">
            {/* Input element for uploading images */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="fileInput"
              style={{ display: 'none' }}
            />
            {/* Component to preview the selected image */}
            <ImagePreview imageSrc={imageSrc} />
            {/* UploadButton component to trigger file input click */}
            <UploadButton text="Upload Image" onButtonClick={() => document.getElementById('fileInput').click()} />
            {/* Error message display */}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {/* Button to fix the image */}
            {errorMessage && (
              <Button variant="primary" onClick={handleFixImage}>
                Fix Image
              </Button>
            )}
            {/* Display the converted image if available */}
            {convertedImage && (
              <div className="converted-image">
                <h2>Converted Image</h2>
                <img src={convertedImage.data} alt="Converted" />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageUpload;
