import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedRegister, { Register } from "../Register";

describe("Register Component", () => {
  it("Should render register form", () => {
    const wrapper = shallow(<Register />);

    expect(wrapper.find("[data-test='register-form']").length).toBe(1);
  });
});
// describe("Unconnected Login Component", () => {
//   let wrapper, firstname,
//     lastname,
//   othername,
//   phone_number,
//   username,
//   email,
//   password,
//   confirm_password form, props;

//   let history = {
//     push: jest.fn()
//   };

//   beforeEach(() => {
//     props = {
//       history: history,
//       register: jest.fn()
//     };
//     wrapper = shallow(<Login {...props} />);
//     firstname = wrapper.find("#firstname");
//     lastname = wrapper.find("#lastname");
//     othername = wrapper.find("#othername");
//     phone_number = wrapper.find("#phone_number");
//     username = wrapper.find("#username");
//     email = wrapper.find("#email");
//     password = wrapper.find("#password");
//     confirm_password = wrapper.find("#confirm_password");

//     form = wrapper.find("#register-form");
//   });
//   it("should set login props on submit", () => {
//     emailinput.simulate("change", {
//       target: {
//         value: "benson@gmail.com",
//         name: "username"
//       }
//     });
//     passwordinput.simulate("change", {
//       target: {
//         value: "pass123",
//         name: "password"
//       }
//     });

//     form.simulate("submit", {
//       preventDefault: jest.fn()
//     });
//     const expectedState = {
//       username: "benson@gmail.com",
//       password: "pass123",
//       authenticated: false
//     };
//     expect(props.login).toBeCalled();
//     expect(props.login).toHaveBeenCalledWith(expectedState, history);
//   });
// });
