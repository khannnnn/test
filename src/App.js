import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './Components/UserList';
import Profile from './Components/Profile';
import Test from './Components/Test';
import NewTest from './Components/NewTest';

function App() {
  return (
    <div>
      <Router>
        <Route exact to="/" path="/">
          <NewTest />
          {/* <UserList /> */}
        </Route>
        <Route to="/profile" path="/profile">
          {/* <Profile /> */}
        </Route>
        <Route to="/test" path="/test">
          {/* <Test /> */}
        </Route>
        <Route to="/test" path="/newtest">
          {/* <NewTest /> */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
