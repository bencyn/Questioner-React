import React, { Component } from "react";
import { connect } from "react-redux";
import { getMeetup } from "../actions";
import { withRouter } from "react-router";

export class Meetups extends Component {
  constructor(props) {
    super();
    const { getMeetup, history } = props;
    this.handleOnClick = id => e => {
      getMeetup(id, history);
    };
  }

  render() {
    let count = 0;
    const { meetups } = this.props;
    const meetupList = meetups.map(meetup => {
      let image;
      count++;
      if (count % 2 == 0) {
        image = "https://s3.envato.com/files/188307997/1.jpg";
      } else {
        image =
          "https://cdn.dribbble.com/users/1807056/screenshots/4666838/dribbble_404.png";
      }
      return meetup ? (
        <div data-test="meetups" className="meetup-item" key={meetup.id}>
          <a
            className="meetup-link"
            href="#"
            onClick={this.handleOnClick(meetup.id)}
            data-image={image}
          >
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
        <div data-test="no-meetups">No upcoming meetup available</div>
      );
    });
    return (
      <div>
        <div>
          <h2 className="meetup-title">Popular meetups nearby</h2>
        </div>
        <div className="meetup-container" id="meetups">
          {meetupList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetups: state.meetups
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMeetup: (id, history) => {
      dispatch(getMeetup(id, history));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Meetups)
);
