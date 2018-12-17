import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class User extends Component {
  state = {
    user: {},
    posts: [],
    isLoading: true
  };

  async componentDidMount() {
    const id = this.props.computedMatch.params.id;
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }));

    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data, isLoading: false }));
  }

  render() {
    const posts = this.state.posts.map(post => {
      const imgSrc = `https://picsum.photos/300/100/?${post.id}`;
      return (
        <li key={post.id}>
          <Link to={`../post/${post.id}`}>{post.title}</Link>
          <div>
            <img src={imgSrc} alt="post" />
          </div>
        </li>
      );
    });
    return this.state.isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h3>{this.state.user.name}</h3>
        <div>{this.state.user.username}</div>
        <div>{this.state.user.email}</div>
        <ul>{posts}</ul>
      </div>
    );
  }
}
