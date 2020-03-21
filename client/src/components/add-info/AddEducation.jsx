import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { addEducation } from '../../actions/profileActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

function AddEducation() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldofstudy, setFieldofstudy] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (current) {
      setTo('');
    }
    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    dispatch(addEducation(newEdu, history));
  }

  return (
    <div className="add-education">
      <Container>
        <Row>
          <Col md={8} className="m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Education</h1>
            <p className="lead text-center">
              Add relavente education that you have attended.
            </p>
            <p className="text-muted">* = required fields.</p>
            <Form onSubmit={onSubmit}>
              <TextFieldGroup
                name="school"
                placeholder="* School"
                value={school}
                error={errors.school}
                onChange={(e) => setSchool(e.target.value)}
              />

              <TextFieldGroup
                name="degree"
                placeholder="* Degree"
                value={degree}
                error={errors.degree}
                onChange={(e) => setDegree(e.target.value)}
              />

              <TextFieldGroup
                name="fieldofstudy"
                placeholder="* Field of study"
                value={fieldofstudy}
                error={errors.fieldofstudy}
                onChange={(e) => setFieldofstudy(e.target.value)}
              />

              <h6>From date:</h6>

              <TextFieldGroup
                name="from"
                value={from}
                error={errors.from}
                onChange={(e) => setFrom(e.target.value)}
                type="date"
              />

              <h6>To date:</h6>

              <TextFieldGroup
                name="to"
                value={to}
                error={errors.to}
                onChange={(e) => setTo(e.target.value)}
                type="date"
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
                placeholder="Tell us about the program..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                error={errors.description}
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

export default AddEducation;
