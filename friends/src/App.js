import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friendos from './components/Friendos';

localStorage.setItem("token", "kdkls");

function App() {
  return (
    <Router>
      <div className="App">
        <p><Link to = "/">Home</Link> <Link to = "/login">LogIn</Link> <Link to = "/friendos">Friendos</Link></p>
        <Switch>
          <PrivateRoute exact path = '/friendos' component = {Friendos} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/' />
          <Route component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
