import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../common/Spinner';
import PostForm from './PostForm';
import { getPosts } from '../../actions/postActions';
import PostFeed from './PostFeed';

function Posts() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const postContent = loading ? <Spinner /> : <PostFeed posts={posts} />;

  return (
    <div className="feed">
      <div className="container">
        <div className="row">
          <div className="col">
            <PostForm />
            {postContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
