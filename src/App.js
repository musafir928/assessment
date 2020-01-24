import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./home";
import Navbar from "./Navbar.js";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
