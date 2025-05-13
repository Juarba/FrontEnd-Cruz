import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.css';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }
    if (oldPassword === newPassword) {
      setError('New password must be different from old password.');
      return;
    }

    setError('');
    setSuccess(true);

  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 position-relative px-3">
      <Card className="p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Change Password</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="oldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter old password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </Form.Group>

          <div className="d-grid">
            <Button className='colorbutton' type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>

      {success && (
        <div className="success-overlay fade-in-animation">
          <Card className="text-center p-4" style={{ maxWidth: '350px' }}>
            <div className="mb-3">
              <img
                src="/public/images/IllustrationSuccess.png"
                alt="Success"
              
              />
            </div>
            <h4 className="mb-3">Contraseña cambiada</h4>
            <h6 className="text-muted py-1">La contraseña se ha modificado correctamente, puede volver a iniciar sesión con una contraseña nueva.</h6>
            <Button className="colorbutton" onClick={() => navigate('/login')}>
              Continue
            </Button>
          </Card>
        </div>
      )}
    </Container>
  );
}

export default ChangePassword;
