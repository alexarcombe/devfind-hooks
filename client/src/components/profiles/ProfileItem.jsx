import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function ProfileItem(props) {
  const { profile } = props;

  return (
    <Card body bg="light">
      <Row>
        <Col className="col-2 my-auto">
          <img
            src={profile.userID.avatar}
            alt=""
            className="img rounded-circle"
          />
        </Col>
        <Col lg={6} md={4} className="col-8">
          <h3>{profile.userID.name}</h3>
          <p>
            {profile.status}
            {' '}
            {isEmpty(profile.company) ? '' : profile.company}
          </p>
          <p>{isEmpty(profile.location) ? null : profile.company}</p>
          <Link to={`/profile/${profile.handle}`}>
            <Button variant="info">View Profile</Button>
          </Link>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <h4>Skill Set</h4>
          <ul className="list-group">
            {profile.skills.slice(0, 4).map((skill) => (
              <li key={skill} className="list-group-item">
                <i className="fa fa-check pr-1" />
                {' '}
                {skill}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Card>
  );
}

ProfileItem.propTypes = {
  profile: propTypes.shape.isRequired,
};

export default ProfileItem;
