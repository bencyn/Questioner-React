import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Meetups = ({ meetups }) => {
  var count = 0;
  const meetupList = meetups.map(meetup => {
    var image;
    count++;
    console.log(meetup.id);
    if (count % 2 == 0) {
      image = "https://s3.envato.com/files/188307997/1.jpg";
    } else {
      image =
        "https://cdn.dribbble.com/users/1807056/screenshots/4666838/dribbble_404.png";
    }
    return meetup ? (
      <div className="meetup-item" key={meetup.id}>
        <a className="meetup-link" href="#" data-image={image}>
          <div className="m-img">
            <img src={image} />
          </div>
          <div className="m-detail">
            <div className="m-time">{meetup.happening_on}</div>
            <div className="m-content">
              <h4>{meetup.topic}</h4>
            </div>
            <div className="m-location">
              <strong>Venue:</strong>
              {meetup.location}
            </div>
          </div>
        </a>
      </div>
    ) : (
      <div>No upcoming meetup available</div>
    );
  });
  return (
    <div>
      <div>
        <h2 class="meetup-title">Popular meetups nearby</h2>
      </div>
      <div className="meetup-container" id="meetups">
        {meetupList}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    meetups: state.meetups
  };
};

export default withRouter(connect(mapStateToProps)(Meetups));
