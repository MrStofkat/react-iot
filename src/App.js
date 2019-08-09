import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Notifications from './components/Notifications';
import Header from './components/Header';
import PageMain from './pages/PageMain';
import PagePrivacy from './pages/PagePrivacy';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outer-wrapper">
        <Router>
          <div className="app-container">
            <Header/>
            <div className="App">
              <Route exact path="/" component={PageMain} />
              <Route exact path="/privacy" component={PagePrivacy}/>
            </div>
          </div>
        </Router>
        <Notifications/>
      </div>
    );
  }
}

export default App;
