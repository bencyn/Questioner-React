import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

class Login extends Component {
  // state = {  }
  render() {
    return (
      <div className="sub-container">
        <div className="login">
          <form id="login-form">
            <label htmlFor="username">Login</label>
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
              required
            />

            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
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

export default withRouter(Login);
