import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

function CommentForm(props) {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { postId } = props;

  function onSubmit(e) {
    e.preventDefault();

    const newComment = {
      text,
    };

    dispatch(addComment(newComment, postId));
  }

  return (
    <div className="post-form mb-3">
      <Card>
        <Card.Header className="bg-info text-white">
          <p>Make a comment...</p>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <TextAreaFieldGroup
              placeholder="Comment..."
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              error={errors.text}
            />
            <Button type="submit" variant="info" block>
              Comment
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentForm;
