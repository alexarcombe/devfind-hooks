import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from 'react-router-dom';
import {
  Container, Row, Col, Spinner,
} from 'react-bootstrap';
import { getAllProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';

function Profiles() {
  const { profiles, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);
  let profileItems;

  if (profiles === null || loading) {
    profileItems = (
      <Spinner
        animation="border"
        variant="primary"
        className="d-block m-auto"
      />
    );
  } else if (profiles.length > 0) {
    profileItems = profiles.map((profile) => (
      <ProfileItem key={profile._id} profile={profile} />
    ));
  } else {
    profileItems = <h4>No profiles found...</h4>;
  }

  return (
    <div className="profiles">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 text-center">Developer Profiles</h1>
            <p className="lead text-center">
              Browse and Connect with developers.
            </p>
            {profileItems}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profiles;
