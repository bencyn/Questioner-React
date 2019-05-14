import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
const Navbar = props => {
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
          <NavLink to="/profile" className="profile">
            Profile
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/post" className="nav-link">
            Post
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
