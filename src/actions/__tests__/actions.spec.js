import * as types from "../types";
import * as actions from "../";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to fetchmeetups ", () => {
    const meetups = { data: { meetup: "Fetch Meetup" } };
    const expectedAction = {
      type: types.FETCH_MEETUP,
      meetups: meetups.data.meetup
    };
    expect(actions.fetchMeetups(meetups)).toEqual(expectedAction);
  });
});

// describe("axios actions", () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it("creates");
// });
