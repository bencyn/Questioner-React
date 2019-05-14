import React, { Component } from "react";

class Meetups extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <h2 className="meetup-title">Popular meetups nearby</h2>
        <div className="meetup-container" id="meetups" />
      </div>
    );
  }
}

export default Meetups;
