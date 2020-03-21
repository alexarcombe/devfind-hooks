import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Button, Table } from 'react-bootstrap';
import { deleteEducation } from '../../actions/profileActions';

function Education(props) {
  const dispatch = useDispatch();
  const { education } = props;

  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td className="align-middle">{edu.school}</td>
      <td className="align-middle">{edu.degree}</td>
      <td className="align-middle">{edu.fieldofstudy}</td>
      <td className="align-middle">
        <Moment format="YYYY-MM-DD">{edu.from}</Moment>
        {' '}
        -
        {' '}
        {edu.current ? (
          'current'
        ) : (
          <Moment format="YYYY-MM-DD">{edu.to}</Moment>
        )}
      </td>
      <td className="align-middle">
        <Button
          type="button"
          variant="danger"
          onClick={() => dispatch(deleteEducation(edu._id))}
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <h4 className="mb-4">Education Credentials</h4>
      <Table hover>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Field Of Study</th>
            <th>Duration</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </Table>
    </>
  );
}

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Education;
