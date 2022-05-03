import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../redux/actions/profileActions';

function Login() {
  const [form, updateForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoginButton = () => {
    dispatch(loginAction(form.email));
    history.push('/foods');
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;

    updateForm({
      ...form,
      [name]: value,
    });
  };

  const isFormValid = () => {
    const { email, password } = form;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ig;
    const passwordMinLength = 6;

    if (!emailRegex.test(email)) return false;
    if (password.length <= passwordMinLength) return false;

    return true;
  };

  return (
    <Container className="mt-3">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Projeto de Receitas</Card.Title>

          <hr />

          <Form.Group className="mb-3" controlId="form-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={ handleInput }
              data-testid="email-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={ handleInput }
              data-testid="password-input"
            />
          </Form.Group>

          <Button
            className="w-100"
            variant="primary"
            type="submit"
            disabled={ !isFormValid() }
            onClick={ handleLoginButton }
            data-testid="login-submit-btn"
          >
            Log in
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
