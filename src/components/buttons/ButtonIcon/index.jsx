import React, { Component } from 'react';
import "./index.css";

export default class ButtonIcon extends Component {

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
        className="button-icon"
      >
        <img
          className="icon"
          src={this.props.icon}
        />
      </div>
    );
  }

}
