import reducer from "../userReducer";
import * as types from "../../actions/types";

describe("meetup reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should handle LOGIN", () => {
    expect(
      reducer([], {
        type: types.LOGIN,
        payload: {
          token: "jsak323sdkljsa",
          authenticated: true
        }
      })
    ).toEqual({
      token: "jsak323sdkljsa",
      authenticated: true
    });
  });

  it("should handle REGISTER", () => {
    expect(
      reducer([], {
        type: types.REGISTER,
        payload: {
          firstname: "Benson",
          lastname: "Nganga",
          othername: "Njunge",
          phone_number: "0790561841",
          username: "bencyn",
          email: "bensonnjung39@gmail.com",
          password: "ben742285",
          confirm_password: "ben742285"
        }
      })
    ).toEqual([
      {
        firstname: "Benson",
        lastname: "Nganga",
        othername: "Njunge",
        phone_number: "0790561841",
        username: "bencyn",
        email: "bensonnjung39@gmail.com",
        password: "ben742285",
        confirm_password: "ben742285"
      }
    ]);
  });
});
