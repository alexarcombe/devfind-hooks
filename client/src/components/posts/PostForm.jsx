import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Card, Button } from 'react-bootstrap';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

function PostForm() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    const newPost = {
      text,
    };

    dispatch(addPost(newPost));
    setText('');
  }

  return (
    <div className="post-form mb-3">
      <Card>
        <Card.Header className="bg-info text-white">
          Post Something...
        </Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <TextAreaFieldGroup
              placeholder="Create a post..."
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              error={errors.text}
            />
            <Button type="submit" variant="info" block>
              Post
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostForm;
