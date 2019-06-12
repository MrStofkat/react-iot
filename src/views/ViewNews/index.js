import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'

import './index.css';

class ViewNews extends Component {

  constructor(props) {
    super(props);
    document.body.style.background = 'white';
  }

  componentDidMount() {
    document.getElementsByClassName("App-title")[0].style.color = '#333';
    [...document.getElementsByClassName("bm-burger-bars")].forEach((element) => {
      element.style.background = '#333';
    });
  }

  render() {
    return (
      <div className="view-info">
        <h1>News</h1>
        <div className="container-intro-text">
          Make sure to follow us on Twitter.
        </div>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'stofkat'
            }}
            options={{
              username: 'Stofkat',
              width: '760',
              theme: 'light'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
      </div>
    );
  }
}

export default ViewNews;
