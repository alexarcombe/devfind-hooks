import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Button, Table } from 'react-bootstrap';
import { deleteExperience } from '../../actions/profileActions';

function Experience(props) {
  const dispatch = useDispatch();
  const { experience } = props;

  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td className="align-middle">{exp.company}</td>
      <td className="align-middle">{exp.title}</td>
      <td className="align-middle">
        <Moment format="YYYY-MM-DD">{exp.from}</Moment>
        {' '}
        -
        {' '}
        {exp.current ? (
          'current'
        ) : (
          <Moment format="YYYY-MM-DD">{exp.to}</Moment>
        )}
      </td>
      <td className="align-middle">
        <Button
          className="btn btn-danger"
          onClick={() => dispatch(deleteExperience(exp._id))}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h4 className="mb-4">Experience Credentials</h4>
      <Table hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Duration</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </Table>
    </>
  );
}

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Experience;
