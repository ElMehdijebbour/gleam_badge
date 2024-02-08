import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageUpload from '../componants/image/ImageUpload'; // Adjust the path as necessary
import Title from '../componants/title/Title';
import Avatar from '../componants/avatar/Avatar';
import './BasicPage.css';

const BasicPage = () => {
  return (
      <Container className="basic-page">
        <Row>
          <Col md={8}>
            <Title />
            <Avatar />
          </Col>
          <Col md={4}>
            <ImageUpload />
          </Col>
        </Row>
      </Container>
  );
};

export default BasicPage;
