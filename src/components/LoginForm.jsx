// src/components/LoginForm.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Github, Facebook, Linkedin, Twitter } from 'lucide-react';
import AOS from 'aos'; // Import AOS (optional if initialized globally)
import 'aos/dist/aos.css'; // Import AOS CSS (optional if initialized globally)

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasErrors, setHasErrors] = useState(false); // Track if there are validation errors
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize AOS on component mount (optional if initialized globally)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 8;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return { minLength, hasUpper, hasNumber, hasSymbol };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = {};
    if (!username) newErrors.username = 'Username/Email is required';
    else if (!username.includes('@') && !/^[a-zA-Z0-9]+$/.test(username))
      newErrors.username = 'Invalid username or email';

    const pwdValidation = validatePassword(password);
    if (!password) newErrors.password = 'Password is required';
    else if (!pwdValidation.minLength)
      newErrors.password = 'Password must be at least 8 characters';
    else if (!pwdValidation.hasUpper || !pwdValidation.hasNumber || !pwdValidation.hasSymbol) {
      newErrors.password = 'Password must have 1 capital, 1 number, 1 symbol';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setHasErrors(true); // Set error state
      setIsSubmitting(false);
      return;
    }

    setErrors({});
    setHasErrors(false); // Clear error state on successful submission
    setTimeout(() => {
      dispatch(login());
      navigate('/home');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <Container fluid className="min-vh-100 p-0 align-items-center justify-content-center d-flex">
      <Row className="w-100 m-0 h-100 justify-content-center align-items-center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Col md={6} className="p-2 md:p-5 bg-white login-container" data-aos={!hasErrors ? 'fade-right' : ''}>
          <h2 className="text-center text-md-start mb-2" data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '200' : '0'}>Sign In</h2>
          <p className="text-center text-md-start mb-4" style={{ fontWeight: 'bold' }} data-aos={!hasErrors ? 'fade-up' : ''} data-aos-delay={!hasErrors ? '300' : '0'}>
            New user? <a href="/register" className="text-blue ms-2">Create an account</a>
          </p>
          <Form onSubmit={handleSubmit} className="w-100 w-md-50" data-aos={!hasErrors ? 'fade-up' : ''} data-aos-delay={!hasErrors ? '400' : '0'}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!errors.username}
                data-aos={!hasErrors ? 'slide-up' : ''}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
                data-aos={!hasErrors ? 'slide-up' : ''} data-aos-delay={!hasErrors ? '100' : '0'}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                label="Keep me signed in"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                data-aos={!hasErrors ? 'fade-in' : ''} data-aos-delay={!hasErrors ? '200' : '0'}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100 mb-4 p-2" disabled={isSubmitting} data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '300' : '0'}>
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
            <div className="text-center mb-4 position-relative" data-aos={!hasErrors ? 'fade-in' : ''} data-aos-delay={!hasErrors ? '400' : '0'}>
              <hr className="separator-line" />
              <span className="px-2 py-1 bg-white position-relative" style={{ zIndex: 100 }}>Or Sign In With</span>
            </div>
            <div className="d-flex gap-3 align-items-center justify-content-center" data-aos={!hasErrors ? 'fade-up' : ''} data-aos-delay={!hasErrors ? '500' : '0'}>
              <Button 
                variant="outline-secondary" 
                className="social-login-btn btn btn-outline-secondary rounded-pill px-2 py-2 d-flex align-items-center justify-content-center"
                data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '600' : '0'}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="outline-secondary" 
                className="social-login-btn btn btn-outline-secondary rounded-pill px-2 py-2 d-flex align-items-center justify-content-center"
                data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '700' : '0'}
              >
                <Facebook size={20} />
              </Button>
              <Button 
                variant="outline-secondary" 
                className="social-login-btn btn btn-outline-secondary rounded-pill px-2 py-2 d-flex align-items-center justify-content-center"
                data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '800' : '0'}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="outline-secondary" 
                className="social-login-btn btn btn-outline-secondary rounded-pill px-2 py-2 d-flex align-items-center justify-content-center"
                data-aos={!hasErrors ? 'zoom-in' : ''} data-aos-delay={!hasErrors ? '900' : '0'}
              >
                <Twitter size={20} />
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6} className="p-0 d-flex justify-content-center align-items-center d-md-block d-none" data-aos={!hasErrors ? 'fade-left' : ''}>
          <img
            src="img/login-image.png"
            alt="Login Background"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            onError={(e) => { e.target.src = 'https://placehold.co/600x800?text=Error'; }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;