import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

function PostItem(props) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { post, displayActions } = props;

  function onLikeClick() {
    const liked = post.likes.reduce(
      (acc, like) => acc || like.user === user.id,
      false,
    );

    if (liked) {
      dispatch(removeLike(post._id));
    } else {
      dispatch(addLike(post._id));
    }
  }

  const deleteButton = post.user === user.id ? (
    <Button variant="danger" onClick={() => dispatch(deletePost(post._id))}>
      <i className="fas fa-times" />
    </Button>
  ) : null;

  const actions = displayActions ? (
    <Col className="col-12 align-self-end">
      <Button variant="light" onClick={onLikeClick} className="mr-1">
        <i className="text-info fas fa-thumbs-up" />
        <span className="badge badge-light">{post.likes.length}</span>
      </Button>
      <Link to={`/post/${post._id}`}>
        <Button variant="info" className="mr-1">
          Comments
        </Button>
      </Link>
      {deleteButton}
    </Col>
  ) : null;

  return (
    <Card body className="mb-3">
      <Row>
        <Col md={2} className="d-none d-md-block">
          <Link to="/">
            <img src={post.avatar} alt="" className="rounded-circle" />
          </Link>
          <p className="text-center">{post.name}</p>
        </Col>
        <Col md={10}>
          <Row className="h-100">
            <Col>
              <p className="lead">{post.text}</p>
            </Col>
            {actions}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape.isRequired,
  displayActions: PropTypes.bool,
};

PostItem.defaultProps = {
  displayActions: true,
};

export default PostItem;
