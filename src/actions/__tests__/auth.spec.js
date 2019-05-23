import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { login, register } from "../index";
import expect from "expect";
import * as types from "../types";

const mockStore = configureMockStore([thunk]);

const user = { username: "", password: "", authenticated: false };

describe("Atuthentication actions", () => {
  let store;

  const data = {
    authenticated: true,
    token: "eyJ0eXAiOiJKV"
  };

  const loginData = {
    username: "bencyn",
    password: "ben742285",
    authenticated: false
  };
  beforeEach(() => {
    store = mockStore({
      user: data
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches LOGIN action and return data on success", () => {
    let history = {
      push: jest.fn()
    };
    axios.post.mockResolvedValue({
      data: {
        data: [{ token: data.token }]
      }
    });

    const expectedActions = [{ type: types.LOGIN, payload: data }];

    return store.dispatch(login(loginData, history)).then(() => {
      const state = store.getState();
      expect(state.user).toEqual(data);
      expect(store.getActions()).toEqual(expectedActions);
      expect(history.push).toBeCalled();
      expect(history.push).toBeCalledWith("/");
    });
  });

  it("dispatches REGISTER action and return data on success", () => {
    let history = {
      push: jest.fn()
    };
    axios.post.mockResolvedValue({
      data: {
        data: [{ token: data.token }]
      }
    });

    const expectedActions = [{ type: types.LOGIN, payload: data }];

    return store.dispatch(login(loginData, history)).then(() => {
      const state = store.getState();
      expect(state.user).toEqual(data);
      expect(store.getActions()).toEqual(expectedActions);
      expect(history.push).toBeCalled();
      expect(history.push).toBeCalledWith("/");
    });
  });
});
