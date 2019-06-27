import React from "react";
import { shallow, mount } from "enzyme";
import ConnectedViewMeetup, { viewMeetup } from "../viewMeetup";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Link, StaticRouter } from "react-router-dom";

const mockStore = configureMockStore([thunk]);

const meetup = {
  meetup: [
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
  ],
  questions: [
    {
      body: "hello",
      created_by: "1",
      created_on: "Mon, 13 May 2019 00:00:00 GMT",
      downvotes: 0,
      email: "bensonnjung39@gmail.com",
      firstname: "benson",
      id: 1,
      is_admin: "1",
      lastname: "njunge",
      meetup_id: "9",
      othername: "nganga",
      password:
        "pbkdf2:sha256:50000$4hpqn7pc$ea0514107e4848507a3717f2551379e4bd6415fca1d009cddefe340cc100084b",
      phone_number: "790561841",
      questions_id: 5,
      registered: "Fri, 01 Mar 2019 21:30:50 GMT",
      title: "Nairobi Born-Again Singles 30+ Meetup",
      upvotes: 0,
      username: "bencyn",
      votes: 0
    },
    {
      body: "hello",
      created_by: "1",
      created_on: "Mon, 13 May 2019 00:00:00 GMT",
      downvotes: 0,
      email: "bensonnjung39@gmail.com",
      firstname: "benson",
      id: 1,
      is_admin: "1",
      lastname: "njunge",
      meetup_id: "9",
      othername: "nganga",
      password:
        "pbkdf2:sha256:50000$4hpqn7pc$ea0514107e4848507a3717f2551379e4bd6415fca1d009cddefe340cc100084b",
      phone_number: "790561841",
      questions_id: 6,
      registered: "Fri, 01 Mar 2019 21:30:50 GMT",
      title: "Nairobi Born-Again Singles 30+ Meetup",
      upvotes: 0,
      username: "bencyn",
      votes: 0
    }
  ],
  status: 200
};
const meetup2 = {
  meetup: [
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
  ],
  questions: false,
  status: 200
};

describe("Unconnected ViewMeetup List", () => {
  it("should render no questions when list is empty", () => {
    const wrapper = shallow(<viewMeetup meetup={[{}]} />);

    // expect(wrapper.find("[data-test='no-questions']").length).toBe(0);
  });

  it("should render no questions when list is empty", () => {
    const wrapper = shallow(<viewMeetup questions={meetup2.questions} />);

    expect(wrapper.find("[data-test='empty-questions']").length).toBe(0);
  });
  it("should render  questions when question list exists", () => {
    const wrapper = shallow(<viewMeetup questions={meetup.questions} />);

    expect(wrapper.find("[data-test='questions']").length).toBe(0);
  });

  describe("<ConnectedMeetupsList />", () => {
    test("should render meetups from store ", () => {
      const store = mockStore({
        meetup: meetup
      });

      const wrapper = mount(
        <StaticRouter>
          <ConnectedViewMeetup {...{ store }} />
        </StaticRouter>
      );
      expect(wrapper.find("[data-test='questions']").length).toBe(2);
    });
  });
});
