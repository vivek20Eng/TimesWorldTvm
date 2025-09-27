// src/pages/RegisterPage.jsx
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function RegisterPage() {
const navigate = useNavigate();
 

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-3">🚧 Page Under Construction 🚧</h1>
      <p className="mb-4">This feature will be available soon.</p>
      <Button variant="outline-secondary" className="rounded-pill" onClick={() => navigate(-1)}>
        ⬅ Back
      </Button>
    </div>
  );
}

export default RegisterPage;
