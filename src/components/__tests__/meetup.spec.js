import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedMeetupsList, { Meetups } from "../Meetups";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Link, StaticRouter } from "react-router-dom";

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
    id: 10,
    images: "None",
    location: "Nairobi",
    tags: "None",
    topic: "Nairobi Born-Again Singles 30+ Meetup",
    user_id: "2"
  }
];

describe("Unconnected Meetups List", () => {
  it("should render no meetups when list is empty", () => {
    const wrapper = shallow(<Meetups meetups={[{}]} />);

    expect(wrapper.find("[data-test='no-meetups']").length).toBe(0);
  });

  it("should render  meetups when meetup list exists", () => {
    const wrapper = shallow(<Meetups meetups={meetup} />);

    expect(wrapper.find("[data-test='meetups']").length).toBe(2);
  });
});
describe("<ConnectedMeetupsList />", () => {
  test("should render meetups from store ", () => {
    const store = mockStore({
      meetups: meetup
    });

    const wrapper = mount(
      <StaticRouter>
        <ConnectedMeetupsList {...{ store }} />
      </StaticRouter>
    );
    expect(wrapper.find("[data-test='meetups']").length).toBe(2);
  });
});
