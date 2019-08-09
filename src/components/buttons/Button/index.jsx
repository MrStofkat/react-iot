import React, { Component } from 'react';
import "./index.css";

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        className="button-default"
      >
        <span>{this.props.title}</span>
      </div>
    );
  }

}
