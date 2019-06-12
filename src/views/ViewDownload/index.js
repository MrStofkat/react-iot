import React, { Component } from 'react';
import './index.css';

export default class ViewDownload extends Component {
  
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
        <h1>Download</h1>
        <div className="container-intro-text">
            ToffeeShare will come available on the App Store and Google Play Store soon.
            The app version will have some advantages over the web version: <br/><br/>
            <div className="item-check" ><span className="check-circle">&#x2713;</span> Higher transfer speeds<br/></div>
            <div className="item-check" ><span className="check-circle">&#x2713;</span> Better network support<br/></div>
            <div className="item-check" ><span className="check-circle">&#x2713;</span> No need to keep your browser window open<br/></div>
            <div className="item-check" ><span className="check-circle">&#x2713;</span> Background notifications when your file is being downloaded<br/></div>

        </div>
        <div className="container-downloads">
        <h2> Apps will come available soon!</h2>
          {/* <a href="https://www.microsoft.com/p/toffeeshare/9nblggh440rt"><img className="button-download-app" src={require('../../assets/img/download-windows-appstore.png')}/></a>
          <a download="setup-toffeeshare.exe" href="downloads/setup-toffeeshare.exe"><img className="button-download-app"src={require('../../assets/img/download-windows.png')}/></a>
          <a download="toffeeshare-macos.zip" href="downloads/toffeeshare-macos.zip"><img className="button-download-app"src={require('../../assets/img/download-macos.png')}/></a> */}
        </div>
      </div>
    );
  }
}
