import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { fetchAllMeetups } from "../index";
import expect from "expect";
import * as types from "../types";

const mockStore = configureMockStore([thunk]);

const meetup = [
  {
    body:
      "A weekly, casual meetup to share our experiences and fellowship together for 90-120 minutes. Lets reach out, socialise for a few moments and pray for each other.",
    created_on: "Fri, 01 Mar 2019 22:26:33 GMT",
    happening_on: "Wed, 06 Nov 2019 00:00:00 GMT",
    id: 9,
    images: "None",
    location: "Nairobi",
    tags: "None",
    topic: "Nairobi Born-Again Singles 30+ Meetup",
    user_id: "2"
  },
  {
    body:
      "A weekly, casual meetup to share our experiences and fellowship together for 90-120 minutes. Lets reach out, socialise for a few moments and pray for each other.",
    created_on: "Fri, 01 Mar 2019 22:26:33 GMT",
    happening_on: "Wed, 06 Nov 2019 00:00:00 GMT",
    id: 9,
    images: "None",
    location: "Nairobi",
    tags: "None",
    topic: "Nairobi Born-Again Singles 30+ Meetup",
    user_id: "2"
  }
];

describe("Meetup actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      meetups: meetup
    });
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it("dispatches GET_MEETUPS action and return data on success", () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          meetup
        }
      })
    );

    const expectedActions = [{ type: types.FETCH_MEETUP, meetups: meetup }];

    return store.dispatch(fetchAllMeetups()).then(() => {
      const state = store.getState();
      expect(state.meetups).toEqual(meetup);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
