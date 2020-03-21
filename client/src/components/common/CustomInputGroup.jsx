import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { InputGroup, Form } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function CustomInputGroup(props) {
  const {
    name, placeholder, value, error, type, onChange, icon,
  } = props;

  return (
    <InputGroup className="mb-3">
      {!isEmpty(icon) && (
        <InputGroup.Prepend>
          <InputGroup.Text className="p-0">
            <i className={icon} />
          </InputGroup.Text>
        </InputGroup.Prepend>
      )}
      <Form.Control
        as="input"
        type={type}
        size="lg"
        className={classnames({ 'is-invalid': !isEmpty(error) })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </InputGroup>
  );
}

CustomInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

CustomInputGroup.defaultProps = {
  type: 'text',
  placeholder: '',
  error: '',
  icon: '',
};

export default CustomInputGroup;
