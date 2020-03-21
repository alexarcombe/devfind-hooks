import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function getSocialIcons(social) {
  if (isEmpty(social)) {
    return null;
  }
  const platformName = [
    'twitter',
    'facebook',
    'instagram',
    'linkedin',
    'youtube',
  ];
  return Object.keys(social).map((platform, index) => {
    if (isEmpty(platform)) {
      return null;
    }
    return (
      <a className="text-white p-2" href={social[platform]}>
        <i className={`fab fa-${platformName[index]} fa-2x`} />
      </a>
    );
  });
}

function ProfileHeader(props) {
  const { profile } = props;

  return (
    <Card body bg="info" className="text-white text-center mb-3">
      <Row>
        <Col md={3} className="col-4 m-auto">
          <img className="rounded-circle" src={profile.userID.avatar} alt="" />
        </Col>
      </Row>
      <Row>
        <Col classname="col-12">
          <h1 className="display-4">{profile.userID.name}</h1>
          <p className="lead">
            {profile.status}
            {isEmpty(profile.company) ? (
              ''
            ) : (
              <span>
                at
                {profile.company}
              </span>
            )}
          </p>
          {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
          <p>
            {isEmpty(profile.website) ? null : (
              <a className="text-white p-2" href={profile.website}>
                <i className="fas fa-globe fa-2x" />
              </a>
            )}
            {getSocialIcons(profile.social)}
          </p>
        </Col>
      </Row>
    </Card>
  );
}

ProfileHeader.propTypes = {
  profile: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileHeader;
