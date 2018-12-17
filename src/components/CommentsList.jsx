import React, { Component } from "react";
import Filter from "./Filter";

export default class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  async componentDidMount() {
    await fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => res.json())
      .then(data => this.setState({ comments: data, isLoading: false }));
  }

  getFilteredComments = async (limit, sort) => {
    this.setState(state => {
      return { isLoading: true };
    });

    await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_sort=body&_order=${sort}`
    )
      .then(res => res.json())
      .then(data => this.setState({ comments: data, isLoading: false }));
  };

  render() {
    const comments = this.state.comments.map(comment => {
      return <li key={comment.id}>{comment.body}</li>;
    });
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <Filter getFiltered={this.getFilteredComments} />
        <ul>{comments}</ul>
      </div>
    );
  }
}
