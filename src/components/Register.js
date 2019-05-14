import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="sub-container">
        <div className="register">
          <form id="register-form">
            <label for="username">
              <strong>Create an account</strong>
            </label>
            <br />
            <div
              id="notification"
              className="alert alert-danger"
              role="alert"
            />
            <label for="username">Firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Firstname"
              id="firstname"
              name="firstname"
              required
            />
            <label for="username">Lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Lastname"
              id="lastname"
              name="lastname"
              required
            />
            <label for="username">Othername</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Othername"
              id="othername"
              name="othername"
              required
            />
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              id="username"
              name="username"
              required
            />
            <label for="username">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              name="email"
              required
            />
            <label for="username">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              id="phone_number"
              name="phone_number"
              required
            />
            <label for="username">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
              required
            />
            <label for="username">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Confirm Password"
              id="confirm_password"
              name="confirm_password"
              required
            />
            <button
              className="btn btn-success btn-block"
              id="submit"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <p>
          Already have an account?
          <NavLink to="/login"> Login Here !</NavLink>
        </p>
      </div>
    );
  }
}

export default Register;
