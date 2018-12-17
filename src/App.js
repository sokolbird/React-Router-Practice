import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import "./App.css";
import history from "./history";
import NoMatch from "./components/404";
import UserList from "./components/UserList";
import User from "./components/User";
import Post from "./components/Post";
import PostList from "./components/PostList";
import CommentsList from "./components/CommentsList";

const Main = props => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login login={props.login} />} />
      <ProtectedRoute exact path="/" component={UserList} {...props} />
      <ProtectedRoute exact path="/user/:id" component={User} {...props} />
      <ProtectedRoute exact path="/post/:id" component={Post} {...props}/>
      <ProtectedRoute exact path="/posts" component={PostList} {...props}/>
      <ProtectedRoute exact path="/comments" component={CommentsList} {...props}/>
      <Route component={NoMatch} />
    </Switch>
  );
};

const RouterApp = ({ login, logout, isAuthenticated }) => {
  return (
    <div>
      <Header logout={logout} />
      <Main login={login} isAuthenticated={isAuthenticated} />
    </div>
  );
};

class App extends Component {
  state = {
    isAuthenticated: false
  };

  login = () => {
    this.setState({ isAuthenticated: true });
    history.goBack();
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
  };

  render() {
    return (
      <BrowserRouter>
        <RouterApp login={this.login} logout={this.logout} {...this.state} />
      </BrowserRouter>
    );
  }
}

export default App;
