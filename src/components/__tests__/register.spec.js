import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedRegister, { Register } from "../Register";

describe("Register Component", () => {
  it("Should render register form", () => {
    const wrapper = shallow(<Register />);

    expect(wrapper.find("[data-test='register-form']").length).toBe(1);
  });
});
