import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import isEmpty from '../../validation/is-empty';

function SelectListGroup(props) {
  const {
    name, value, error, info, onChange, options,
  } = props;

  const selectOptions = options.map((opt) => (
    <option key={opt.label} value={opt.value}>
      {opt.label}
    </option>
  ));

  return (
    <Form.Group>
      <Form.Control
        as="select"
        size="lg"
        className={classnames({
          'is-invalid': !isEmpty(error),
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </Form.Control>
      {!isEmpty(info) && <Form.Text className="text-muted">{info}</Form.Text>}
      {!isEmpty(error) && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

SelectListGroup.defaultProps = {
  info: '',
  error: '',
};

export default SelectListGroup;
