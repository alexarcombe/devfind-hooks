import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onLikeClick(e) {
    const { post, auth } = this.props;
    const like = post.likes.reduce(
      (acc, like) => acc || like.user === auth.user.id,
      false
    );

    if (like) {
      this.props.removeLike(post._id);
    } else {
      this.props.addLike(post._id);
    }
  }

  onDeleteClick(e) {
    this.props.deletePost(this.props.post._id);
  }

  render() {
    const { post, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2 d-none d-md-block">
            <Link to="/">
              <img src={post.avatar} className="rounded-circle" />
            </Link>
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <div className="mt-auto">
              <button
                onClick={this.onLikeClick.bind(this)}
                className="btn btn-light mr-1"
              >
                <i className="text-info fas fa-thumbs-up" />
                <span className="badge badge-light">{post.likes.length}</span>
              </button>
              <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this)}
                  className="btn btn-danger"
                >
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  deletePost: propTypes.func.isRequired,
  addLike: propTypes.func.isRequired,
  removeLike: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
