import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

export class Navbar extends Component {
  constructor(props) {
    super(props);

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
    console.log(authenticated);
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
                <NavLink to="/profile" data-test="profile" className="nav-link">
                  Profile
                </NavLink>
                <a className="nav-link" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            ) : (
              <NavLink to="/login" data-test="login" className="nav-link">
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
