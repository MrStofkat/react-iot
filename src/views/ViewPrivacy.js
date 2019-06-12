import React, { Component } from 'react';

class ViewPrivacy extends Component {

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
        <h1>Privacy Policy</h1>
        <div className="container-intro-text">
        We don’t store your data, period.<br/><br/>
        This website only (anonymously) keeps track of the number of visitors, and that is all it will ever do.
        If you have any concerns about privacy don't hesitate to send us a message.
        </div>
      </div>
    );
  }
}

export default ViewPrivacy;
