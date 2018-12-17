import React, { Component } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

export default class PostList extends Component {
  state = {
    posts: [],
    isLoading: true
  };

  async componentDidMount() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data, isLoading: false }));
  }

  getFilteredPosts = async (limit, sort) => {
    this.setState(state => {
      return { isLoading: true };
    });

    await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=title&_order=${sort}`
    )
      .then(res => res.json())
      .then(data => this.setState({ posts: data, isLoading: false }));
  };

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
        <Filter getFiltered={this.getFilteredPosts} />
        <ul>{posts}</ul>
      </div>
    );
  }
}
