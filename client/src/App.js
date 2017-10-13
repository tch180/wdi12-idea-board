import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import Ideapage from './components/idea/ideaPage'
import LogInPage from './components/login/LoginPage'




class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div> <Link to="/">HOME</Link></div>
        <div> <Link to="/login">LogIn</Link></div>
        <div> <Link to="/idea">Idea</Link></div>

        
      <div>
        <Switch>
          <Route exact path = '/' component={HomePage} />
          <Route exact path = '/idea/:userId' component={Ideapage} />
          <Route exact path = '/login' component={LogInPage} />
        </Switch>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;