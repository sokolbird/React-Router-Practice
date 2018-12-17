import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/posts">
          Posts
        </NavLink>
        <NavLink exact to="/comments">
          Comments
        </NavLink>
        <span>Username</span>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}
