import React, { Component } from 'react';

class Posts extends Component {

  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }
  
  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  }

  handleDelete = (post, key) => {
    this.props.firebase.ref('posts/' + key).remove();
  }

  render() {
    let {posts} = this.props;
    const _this = this;

    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
              <div>Title: { posts[key].title }</div>
              <div>Upvotes: { posts[key].upvote }</div>
              <div>Downvotes: { posts[key].downvote }</div>
              <div>
                <button 
                  onClick={ _this.handleUpvote.bind(this, posts[key], key) }
                  type="button"
                >
                  Upvote
                </button>
                <button 
                  onClick={ _this.handleDownvote.bind(this, posts[key], key) }
                  type="button"
                >
                  Downvote
                </button>
                
                <button 
                onClick={ _this.handleDelete.bind(this, posts[key], key) }
                type="button"
              >
                Delete Post
              </button>

              </div>
            </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;