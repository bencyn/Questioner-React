import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor() {
    super();
    this.handleLogout = e => {
      e.preventDefault();
      var result = confirm("Are sure you want to logout?");
      if (result) {
        localStorage.clear();
        this.props.history.push("/");
      }
    };
  }

  render() {
    const authenticated = localStorage.getItem("authenticated");
    return (
      <div>
        <header>
          <NavLink to="/" className="logo">
            <h2>
              <strong>Questioner</strong>
            </h2>
          </NavLink>
          <div className="navigation">
            <NavLink to="/">Home</NavLink>
            {authenticated ? (
              <div>
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
                <a className="nav-link" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            ) : (
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            )}
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(connect(mapStateToProps)(Navbar));
