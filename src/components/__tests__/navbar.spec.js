import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { withRouter } from "react-router-dom";
import ConnectNavbar, { Navbar } from "../Navbar";

describe("Unconnected NavBar Component Tests", () => {
  it("should render navbar components when logged In ", () => {
    localStorage.setItem("authenticated", true);
    const authenticatedWrapper = shallow(<Navbar />);
    expect(authenticatedWrapper.find("[data-test='profile']").length).toBe(1);
    localStorage.clear();
  });

  it("should render navbar components when loggedOut ", () => {
    const authenticatedWrapper = shallow(<Navbar />);
    expect(authenticatedWrapper.find("[data-test='login']").length).toBe(1);
    localStorage.clear();
  });
});
