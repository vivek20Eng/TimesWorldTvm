// src/components/CountryCard.jsx --->
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CountryCard = ({ country }) => {

  return (
    <Col xs={12} md={6} className="country-grid mb-3" data-aos="fade-up" data-aos-delay="100">
      <Card className="country-card" style={{ height: '120px' }} data-aos="zoom-in" data-aos-delay="200">
        <Row className="align-items-center h-100 g-0">
          <Col xs={4} className="p-2 d-flex align-items-center justify-content-center">
            <Card.Img
              variant="top"
              src={country.flag || 'https://placehold.co/40x30?text=Flag'}
              alt={country.name}
              className="card-img-custom"
              style={{ height: '100px', width: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = 'https://placehold.co/40x30?text=Flag'; }}
              data-aos="fade-in"
              data-aos-delay="300"
            />
          </Col>
          <Col xs={8} className="p-2 d-flex align-items-center">
            <Card.Body className="p-0">
              <Card.Title className="mb-0" style={{ fontSize: '16px', color: '#000' }} data-aos="fade-right" data-aos-delay="400">
                {country.name}
              </Card.Title>
              <Card.Text style={{ fontSize: '14px', color: '#000' }} data-aos="fade-right" data-aos-delay="500">
                {country.region}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CountryCard;