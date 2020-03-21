import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

function Landing() {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }, [auth, history]);

  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1 className="display-3 mb-4">Developer Connector</h1>
              <p className="lead">
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <hr />
              <Link className="btn btn-lg btn-info mr-2" to="/register">
                Sign Up
              </Link>
              <Link className="btn btn-lg btn-light" to="/login">
                Login
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Landing;
