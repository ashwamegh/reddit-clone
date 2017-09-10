import React, { Component } from 'react';

class Posts extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="Posts">
        { this.props.posts.map((post) => {
            return (
              <div key={post.title }>
                { post.title }
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;