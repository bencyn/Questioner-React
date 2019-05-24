import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      othername: "",
      phone_number: "",
      username: "",
      email: "",
      password: "",
      confirm_password: ""
    };

    this.handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();

      this.props.register(this.state, this.props.history);
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
    const {
      firstname,
      lastname,
      othername,
      phone_number,
      username,
      email,
      password,
      confirm_password
    } = this.state;
    return (
      <div className="sub-container">
        <div className="register">
          <form
            id="register-form"
            data-test="register-form"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="username">
              <strong>Create an account</strong>
            </label>
            <br />
            <div
              id="notification"
              className="alert alert-danger"
              role="alert"
            />
            <label htmlFor="username">Firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Firstname"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="username">Lastname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Lastname"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="username">Othername</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Othername"
              id="othername"
              name="othername"
              value={othername}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="username">Username</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="username">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              id="phone_number"
              name="phone_number"
              value={phone_number}
              onChange={this.handleInputChange}
              required
            />
            <label htmlFor="username">Password</label>
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
            <label htmlFor="username">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Confirm Password"
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={this.handleInputChange}
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

export default withRouter(
  connect(
    null,
    { register }
  )(Register)
);
