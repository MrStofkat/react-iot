import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './index.css';

import controller from '../../controller/Controller';
import ShareLink from '../../components/ShareLink';
import Progress from '../../components/Progress';


import {notify} from '../../components/Notifications';
import copyToClipboard from '../../controller/CopyClipboard'

class ViewShare extends Component {

  constructor(props) {
    super(props);
    document.body.style.background = "linear-gradient(to right, #2ec9ff 0%,#0068ff 100%)";

    let shareCode  = window.location.search.substring(1);
    this.state = {
      downloadUrl: 'toffeeshare://' + shareCode,
      shareCode: shareCode,
    };

  }

  componentDidMount() {
    document.getElementsByClassName("App-title")[0].style.color = '#fff';
    [...document.getElementsByClassName("bm-burger-bars")].forEach((element) => {
      element.style.background = '#fff';
    });
  }


  render() {
    return (
      <div className="container-main">
      <div className="container-share">
        <div className="container-app">
          <h2 className="header-top">You received a file via ToffeeShare</h2>
          <span>Click the button to start downloading with ToffeeShare or copy and paste the code below in the application</span>
          <div className="container-share-url">
          <input
            value={this.state.shareCode}
            type="text"
            id="share-url"
          />
          <img
            className="button-copy"
            src={require('../../assets/img/copy.svg')}
            onClick={()=> {copyToClipboard(this.state.shareCode)}}
          />
        </div>
          <div className="container-buttons">
            <a className="button-download" href={this.state.downloadUrl}>
              Open ToffeeShare
            </a>
            <a className="button-download" href="/download">
              Get the app
            </a>
          </div>
          <div className="container-info">
            <div className="info-item">
              <img className="img-secure" src={require('../../assets/img/direct.svg')}/>
              <span>Peer to peer</span>
            </div>
            <div className="info-item">
              <img className="img-secure" src={require('../../assets/img/encrypted.svg')}/>
              <span>End-to-end encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ViewShare;
