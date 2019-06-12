import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Notifications from './components/Notifications';
import Header from './components/Header';
import ViewInfo from './views/ViewInfo';
import ViewDownload from './views/ViewDownload';
import ViewNews from './views/ViewNews';
import ViewPrivacy from './views/ViewPrivacy';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <Router>
          <div>
            <Header/>
            <div className="App">
              <Route exact path="/" component={ViewInfo} />
              <Route exact path="/download" component={ViewDownload} />
              <Route exact path="/news" component={ViewNews} />
              <Route exact path="/privacy" component={ViewPrivacy}/>
            </div>
          </div>
        </Router>
        <Notifications/>
      </div>
    );
  }
}

export default App;
