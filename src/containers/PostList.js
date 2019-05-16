// PostList.js

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Post from "../components/Post";
import { deletePost } from "../actions";

function PostList({ posts, onDelete }) {
  if (!posts.length) {
    return <div>No Posts</div>;
  }
  return (
    <div>
      {posts.map(post => {
        return <Post post={post} onDelete={onDelete} key={post.id} />;
      })}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)
);
