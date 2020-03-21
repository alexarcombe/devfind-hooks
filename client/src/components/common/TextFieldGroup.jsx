import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function TextFieldGroup(props) {
  const {
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled,
  } = props;
  return (
    <Form.Group>
      <Form.Control
        as="input"
        type={type}
        size="lg"
        className={classnames({
          'is-invalid': error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        label={label}
      />
      {!isEmpty(info) && <Form.Text className="text-muted">{info}</Form.Text>}
      {!isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

TextFieldGroup.propTypes = {
  type: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  info: propTypes.string,
  error: propTypes.string,
  disabled: propTypes.bool,
  onChange: propTypes.func.isRequired,
  label: propTypes.string,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  placeholder: '',
  info: '',
  error: '',
  disabled: false,
  label: '',
};

export default TextFieldGroup;
