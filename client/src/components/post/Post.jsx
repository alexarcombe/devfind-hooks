import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  Container, Row, Col, Spinner,
} from 'react-bootstrap';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import { getPost } from '../../actions/postActions';
import PostItem from '../posts/PostItem';
import isEmpty from '../../validation/is-empty';

function Post() {
  const { post, loading } = useSelector((state) => state.post);
  const { params } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(getPost(id));
    }
  }, [dispatch, params]);

  let postContent;

  if (loading || post === {}) {
    postContent = (
      <Spinner
        animation="border"
        variant="primary"
        className="m-auto d-block"
      />
    );
  } else {
    postContent = <PostItem post={post} displayActions={false} />;
  }

  return (
    <div className="post">
      <Container>
        <Row>
          <Col>
            <Link to="/posts" className="btn btn-light mb-3">
              Back To Feed
            </Link>
            {postContent}
            {isEmpty(post) ? null : <CommentForm postId={post._id} />}
            {isEmpty(post.comment) ? null : (
              <CommentFeed comments={post.comment} postId={post._id} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
