import React from 'react';
import SignIn from './Authentications/SignIn';
import SignUp from './Authentications/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AppBar, Button } from '@material-ui/core';
import HomePage from './screens/HomePage';
import FlightDetails from './components/FlightDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <SignIn />
        </Route>
        <Route exact path="/signup" >
          <SignUp />
        </Route>
        <Route exact path="/home" >
          <HomePage />
        </Route>
        <Route exact path="/flight" >
          <FlightDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
