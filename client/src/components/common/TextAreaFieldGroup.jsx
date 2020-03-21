import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function TextAreaFieldGroup(props) {
  const {
    name, placeholder, value, error, info, onChange,
  } = props;

  return (
    <Form.Group>
      <Form.Control
        as="textarea"
        size="lg"
        className={classnames({
          'is-invalid': !isEmpty(error),
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {!isEmpty(info) && <Form.Text className="text-muted">{info}</Form.Text>}
      {!isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextAreaFieldGroup.defaultProps = {
  placeholder: '',
  info: '',
  error: '',
};

export default TextAreaFieldGroup;
