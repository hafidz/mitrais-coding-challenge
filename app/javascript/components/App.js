import React, { Component, useState } from "react";
import Home from "./Home";
import Member from "./Member";
import Login from "./Login";
import Api from "./Api";
import { Route, Switch } from "react-router-dom";
import Genre from "./Genre";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/members" component={Member} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Login} />
        <Route exact path="/genre" component={Genre} />
      </div>
    );
  }
}

export default App;
