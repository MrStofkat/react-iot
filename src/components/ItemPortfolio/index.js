import React, { Component } from 'react';
import './index.css'

export default class ItemPortfolio extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item-portfolio">
        <div className="container-circle-icon">
          <img className="img-info" src={this.props.item.images[0]}/>
        </div>
        <div className="intro-text" >
          <h3>{this.props.title}</h3>
          <div dangerouslySetInnerHTML={{__html: this.props.item.introText}}/>
        </div>
      </div>
    );
  }
}