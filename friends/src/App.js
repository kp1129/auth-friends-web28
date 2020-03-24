import React from 'react';
import Login from './components/Login';
import FriendList from './components/FriendList';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* NavLinks */}
        <NavLink to="login">Login </NavLink>
        <NavLink to="home"> Friends </NavLink>
        
     
      <Switch>
        <PrivateRoute exact path="/home" component={FriendList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>

      </header>
    </div>
    </Router>
  );
}

export default App;
