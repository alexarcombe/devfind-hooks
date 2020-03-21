import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProfileActions() {
  return (
    <ButtonGroup className="mb-4">
      <CustomButton
        to="/edit-profile"
        icon="fas fa-user-circle text-info mr-1"
        text="Edit Profile"
      />
      <CustomButton
        to="/add-experience"
        icon="fab fa-black-tie text-info mr-1"
        text="Add Experience"
      />
      <CustomButton
        to="/add-education"
        icon="fas fa-graduation-cap text-info mr-1"
        text="Add Education"
      />
    </ButtonGroup>
  );
}

function CustomButton(props) {
  const { to, icon, text } = props;
  return (
    <Link to={to}>
      <Button variant="light">
        <i className={icon} />
        {text}
      </Button>
    </Link>
  );
}

CustomButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProfileActions;
