import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

class Register extends Component {
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

      // this.props.login(this.state, this.props.history);
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
    return (
      <div className="sub-container">
        <div className="register">
          <htmlForm id="register-htmlForm">
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
              className="htmlForm-control"
              placeholder="Enter Firstname"
              id="firstname"
              name="firstname"
              required
            />
            <label htmlFor="username">Lastname</label>
            <input
              type="text"
              className="htmlForm-control"
              placeholder="Enter Lastname"
              id="lastname"
              name="lastname"
              required
            />
            <label htmlFor="username">Othername</label>
            <input
              type="text"
              className="htmlForm-control"
              placeholder="Enter Othername"
              id="othername"
              name="othername"
              required
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="htmlForm-control"
              placeholder="Enter Username"
              id="username"
              name="username"
              required
            />
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className="htmlForm-control"
              placeholder="Enter Email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="username">Phone Number</label>
            <input
              type="tel"
              className="htmlForm-control"
              placeholder="Enter Phone Number"
              id="phone_number"
              name="phone_number"
              required
            />
            <label htmlFor="username">Password</label>
            <input
              type="password"
              className="htmlForm-control"
              placeholder="Enter Password"
              id="password"
              name="password"
              required
            />
            <label htmlFor="username">Confirm Password</label>
            <input
              type="password"
              className="htmlForm-control"
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
          </htmlForm>
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
