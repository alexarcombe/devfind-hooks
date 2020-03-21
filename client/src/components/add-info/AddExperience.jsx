import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { addExperience } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

function AddExperience() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (current) {
      setTo('');
    }
    const newExp = {
      company,
      location,
      title,
      from,
      to,
      current,
      description,
    };

    dispatch(addExperience(newExp, history));
  }

  return (
    <div className="add-experience">
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Experience</h1>
            <p className="lead text-center">
              Add any job or position you have had in the past or current.
            </p>
            <small className="d-black text-muted pb-3">
              * = required field.
            </small>
            <Form onSubmit={onSubmit}>
              <TextFieldGroup
                name="company"
                placeholder="* Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                error={errors.company}
              />

              <TextFieldGroup
                name="title"
                placeholder="* Job Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                error={errors.title}
              />

              <TextFieldGroup
                name="location"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                error={errors.location}
              />

              <h6>From date:</h6>

              <TextFieldGroup
                name="from"
                value={from}
                type="date"
                onChange={(e) => setFrom(e.target.value)}
                error={errors.from}
              />

              <h6>To date:</h6>

              <TextFieldGroup
                name="to"
                value={to}
                type="date"
                onChange={(e) => setTo(e.target.value)}
                error={errors.to}
                disabled={current}
              />

              <Form.Group>
                <Form.Check
                  as="input"
                  type="checkbox"
                  name="current"
                  onChange={() => setCurrent(!current)}
                  value={current}
                  checked={current}
                  id="current"
                  label="Current Education"
                />
              </Form.Group>

              <TextAreaFieldGroup
                name="description"
                placeholder="Job Description"
                value={description}
                errors={errors.description}
                onChange={(e) => setDescription(e.target.value)}
                info="Tell us about your position."
              />

              <Button type="submit" variant="info" block className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddExperience;
