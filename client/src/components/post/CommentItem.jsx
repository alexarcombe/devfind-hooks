import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { removeComment } from '../../actions/postActions';

function CommentItem(props) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { postId, comment } = props;

  function onDeleteClick() {
    dispatch(removeComment(postId, comment._id));
  }

  const deleteButton = (
    <Col className="col-12 align-self-end d-flex justify-content-end">
      <Button variant="danger" onClick={onDeleteClick}>
        <i className="fas fa-times" />
      </Button>
    </Col>
  );

  return (
    <Card body className="mb-3">
      <Row>
        <Col md={2} className="d-none d-md-block">
          <img src={comment.avatar} alt="" className="rounded-circle" />
          <br />
          <p className="text-center">{comment.name}</p>
        </Col>
        <Col md={10}>
          <Row className="h-100">
            <Col className="col-12">
              <p className="lead">{comment.text}</p>
            </Col>
            {comment.user === user.id ? deleteButton : null}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.objectOf(PropTypes.string).isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentItem;
