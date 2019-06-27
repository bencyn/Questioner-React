import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Meetups from "./components/Meetups";
import Login from "./components/Login";
import viewMeetup from "./components/viewMeetup";
import Register from "./components/Register";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />

          <div className="main">
            <nav />
            <article className="meetup-details">
              <Switch>
                <Route exact path="/" component={Meetups} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/meetup" component={viewMeetup} />
              </Switch>
            </article>
            <aside />
          </div>
          <div className="clearfix" />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
