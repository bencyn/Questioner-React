import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NewPost from "./components/NewPost";
// import CreatePost from "./containers/CreatePost";
import Meetups from "./components/Meetups";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />

          <div className="main">
            <nav />
            <article>
              {/* <Meetups /> */}
              <Switch>
                <Route exact path="/" component={Meetups} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/post" component={CreatePost} /> */}
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

export default App;
