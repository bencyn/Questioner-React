import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";
import Swal from "sweetalert2";

export class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "", authenticated: false };

    this.handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();

      this.props.login(this.state, this.props.history);
      this.handleReset();
    };

    this.handleReset = () => {
      this.setState({
        username: "",
        password: ""
      });
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="sub-container">
        <div className="login">
          <form id="login-form" onSubmit={this.handleSubmit}>
            <label>Login</label>
            <div
              id="notification"
              className="alert alert-danger"
              role="alert"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />

            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
            <button
              className="btn btn-success btn-block"
              id="submit"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <p>
          Don't have an account?
          <NavLink to="/register"> Register Here!</NavLink>
        </p>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { login }
  )(Login)
);
