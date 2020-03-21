import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function ProfileAbout(props) {
  const { profile } = props;

  const firstname = profile.userID.name.split(' ')[0];

  return (
    <Row>
      <Col>
        <Card body bg="light" className="mb-3 text-center">
          <h3 className="text-info">
            {firstname}
            &apos;s bio
          </h3>
          {isEmpty(profile.bio) ? (
            <p className="lead">No bio added</p>
          ) : (
            <p className="lead">{profile.bio}</p>
          )}
          <hr />
          <h3 className="text-info">Skill Set</h3>
          <Row>
            <div className="d-flex flex-wrap justify-content-around align-items-center w-100">
              {profile.skills.map((skill) => (
                <div className="p-3" key={skill}>
                  <i className="fa fa-check" />
                  {skill}
                </div>
              ))}
            </div>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

ProfileAbout.propTypes = {
  profile: PropTypes.shape.isRequired,
};

export default ProfileAbout;
