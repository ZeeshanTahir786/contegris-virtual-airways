import React from 'react';
import './App.css';
import SignIn from './Authentications/SignIn';
import SignUp from './Authentications/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AppBar, Button } from '@material-ui/core';

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
        <Route exact path="/appbar" >
          <AppBar position="static">
            <Button color="inherit">Login</Button>
          </AppBar>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
