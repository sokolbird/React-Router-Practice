import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    const userList = this.state.users.map(user => {
      const imgSrc = `https://picsum.photos/100/100/?${user.id}`;
      return (
        <li key={user.id}>
          <Link to={`user/${user.id}`}>{user.username}</Link>
          <div>
            <img src={imgSrc} alt="avatar" />
          </div>
        </li>
      );
    });
    return <ul>{userList}</ul>;
  }
}
