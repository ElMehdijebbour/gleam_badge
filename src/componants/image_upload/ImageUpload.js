import React, { useState } from 'react';
import { verifyImage } from '../../utils/verifyImage';
import { convertImageToObject } from '../../utils/convertImageToObject';
import ImagePreview from './ImagePreview'; // Import the ImagePreview component
import placeholderImg from '../../assets/placeholder.png'; // Import the placeholder image
import './ImageUpload.css'; // Import the CSS file for styling
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'; // Import necessary components from React Bootstrap
import UploadButton from '../buttons/UploadButton'; // Import the UploadButton component
import FixImageButton from '../buttons/FixImageButton'; // Import the FixImageButton component

function ImageUpload() {
  // State variables to manage image source, error message, and modal visibility
  const [imageSrc, setImageSrc] = useState(placeholderImg);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle closing the modal
  const handleCloseModal = () => setShowModal(false);

  // Function to handle opening the modal
  const handleShowModal = () => setShowModal(true);

  // Function to handle image change event
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Verify the selected image
      const isVerified = await verifyImage(file);
      if (isVerified) {
        // If the image meets the requirements, set the image source
        const reader = new FileReader();
        reader.onload = function (e) {
          setImageSrc(e.target.result);
        };
        reader.readAsDataURL(file);
        setErrorMessage(''); // Reset error message
      } else {
        // If the image doesn't meet the requirements, set error message and show modal
        setErrorMessage('The image does not meet the requirements. Please click "Fix Image" to proceed.');
        handleShowModal();
      }
    }
  };

  // Function to handle fixing the image
  const handleFixImage = async () => {
    try {
      const fileInput = document.getElementById('fileInput');
      if (fileInput.files.length > 0) {
        // Convert the image to an object
        const newImgUrl = await convertImageToObject(fileInput.files[0]);
        setImageSrc(newImgUrl); // Update the image source with the fixed image
        setErrorMessage(''); // Clear error message
        handleCloseModal(); // Close the modal after fixing the image
      }
    } catch (error) {
      console.error('Error converting image:', error);
      setErrorMessage('Error converting the image.'); // Set error message if conversion fails
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="image-upload-container">
            {/* Input element for uploading images */}
            <input type="file" accept="image/*" onChange={handleImageChange} id="fileInput" style={{ display: 'none' }} />
            {/* Component to preview the selected image */}
            <ImagePreview imageSrc={imageSrc} />
            {/* UploadButton component to trigger file input click */}
            <UploadButton text="Upload Image" onButtonClick={() => document.getElementById('fileInput').click()} />
            {/* Display the FixImageButton component if there is an error */}
            {errorMessage && (
              <FixImageButton text="Fix Image" onButtonClick={handleFixImage} />
            )}
          </div>
        </Col>
      </Row>
      {/* Modal to display error message */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ImageUpload;
