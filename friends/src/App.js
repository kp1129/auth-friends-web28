import React from "react";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <PrivateRoute exact path="/home" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
