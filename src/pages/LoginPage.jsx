// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 p-0">
      <div className="w-100" style={{ maxWidth: '1200px' }}>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;