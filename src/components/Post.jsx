import React, { Component } from "react";

export default class Post extends Component {
  state = {
    post: {},
    comments: [],
    isLoading: true
  };

  async componentDidMount() {
    const id = this.props.computedMatch.params.id;
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ post: data }));

    await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => this.setState({ comments: data, isLoading: false }));
  }

  render() {
    const comments = this.state.comments.map(comment => {
      return <li key={comment.id}>{comment.body}</li>;
    });
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h3>{this.state.post.title}</h3>
        <p>{this.state.post.body}</p>
        <h3>Comments:</h3>
        <ul>{comments}</ul>
      </div>
    );
  }
}
