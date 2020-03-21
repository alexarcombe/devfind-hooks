import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

function Register() {
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }, [auth, history]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    dispatch(registerUser(newUser, history));
  };

  return (
    <div className="register">
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevFind account</p>

            <Form noValidate onSubmit={onSubmit}>
              <TextFieldGroup
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />

              <TextFieldGroup
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                info="This site uses Gravatar so if you want a profile image, use
                  a Gravatar email"
              />

              <TextFieldGroup
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />

              <TextFieldGroup
                name="password2"
                type="password"
                placeholder="Confrim Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                error={errors.password2}
              />

              <Button type="submit" variant="info" block className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
