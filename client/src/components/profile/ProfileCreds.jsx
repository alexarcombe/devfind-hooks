import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function ProfileCreds(props) {
  const { education, experience } = props;

  const eduItems = education.map((edu) => (
    <li key={edu._id} className="list-group-item">
      <h4>{edu.school}</h4>
      <p>
        <Moment format="YYYY-MM-DD">{edu.from}</Moment>
        -
        {isEmpty(edu.to) ? (
          'current'
        ) : (
          <Moment format="YYYY-MM-DD">{edu.to}</Moment>
        )}
      </p>
      <p>
        <strong>Degree: </strong>
        {' '}
        {edu.degree}
      </p>
      <p>
        <strong>Field of study: </strong>
        {' '}
        {edu.fieldofstudy}
      </p>
      {isEmpty(edu.description) ? null : (
        <p>
          <strong>Description: </strong>
          {' '}
          {edu.description}
        </p>
      )}
    </li>
  ));

  const expItems = experience.map((exp) => (
    <li key={exp._id} className="list-group-item">
      <h4>{exp.company}</h4>
      <p>
        <Moment format="YYYY-MM-DD">{exp.from}</Moment>
        {' '}
        -
        {' '}
        {isEmpty(exp.to) ? (
          'current'
        ) : (
          <Moment format="YYYY-MM-DD">{exp.to}</Moment>
        )}
      </p>
      <p>
        <strong>Position: </strong>
        {' '}
        {exp.title}
      </p>
      {isEmpty(exp.location) ? null : (
        <p>
          <strong>Location: </strong>
          {' '}
          {exp.location}
        </p>
      )}
      {isEmpty(exp.description) ? null : (
        <p>
          <strong>Description: </strong>
          {' '}
          {exp.description}
        </p>
      )}
    </li>
  ));

  return (
    <Row>
      <Col md={6}>
        <h3 className="text-center text-info">Experience</h3>
        {expItems.length > 0 ? (
          <ul className="list-group">{expItems}</ul>
        ) : null}
      </Col>
      <Col md={6}>
        <h3 className="text-center text-info">Education</h3>
        {eduItems.length > 0 ? (
          <ul className="list-group">{eduItems}</ul>
        ) : null}
      </Col>
    </Row>
  );
}

ProfileCreds.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape).isRequired,
  experience: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProfileCreds;
