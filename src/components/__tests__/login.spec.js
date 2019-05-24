import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedLogin, { Login } from "../Login";

describe("Unconnected Login Component", () => {
  let wrapper, emailinput, passwordinput, form, props;
  let history = {
    push: jest.fn()
  };

  beforeEach(() => {
    props = {
      history: history,
      login: jest.fn()
    };
    wrapper = shallow(<Login {...props} />);
    emailinput = wrapper.find("#username");
    passwordinput = wrapper.find("#password");
    form = wrapper.find("#login-form");
  });
  it("should set login props on submit", () => {
    emailinput.simulate("change", {
      target: {
        value: "benson@gmail.com",
        name: "username"
      }
    });
    passwordinput.simulate("change", {
      target: {
        value: "pass123",
        name: "password"
      }
    });

    form.simulate("submit", {
      preventDefault: jest.fn()
    });
    const expectedState = {
      username: "benson@gmail.com",
      password: "pass123",
      authenticated: false
    };
    expect(props.login).toBeCalled();
    expect(props.login).toHaveBeenCalledWith(expectedState, history);
  });
});
