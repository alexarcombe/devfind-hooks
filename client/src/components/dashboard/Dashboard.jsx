import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Spinner, Container, Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  let dashboardContent = null;

  if (profile === null || loading) {
    dashboardContent = (
      <Spinner animation="border" role="status" variant="primary" size="lg" />
    );
  } else if (Object.keys(profile).length === 0) {
    dashboardContent = (
      <Container>
        <Row>
          <Col>
            <p className="lead text-muted">
              Welcome
              {user.name}
            </p>
            <p>You have not yet set up a profile please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    dashboardContent = (
      <Container>
        <Row>
          <Col>
            <p className="lead text-muted">
              Welcome
              {' '}
              <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="danger" onClick={() => dispatch(deleteAccount())}>
              Delete Account
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="dashboard">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
