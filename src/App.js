import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import Register from "./components/Register";
import Meetups from "./components/Meetups";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  // state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />

          <div className="main">
            <nav />
            <article>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/post" component={NewPost} />
              <Meetups />
            </article>
            <aside />
          </div>
          <div className="clearfix" />

          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
