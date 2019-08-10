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
        {this.props.emoji &&
          <span className={(this.props.rotate ? "rotated" : "")}>
            {this.props.emoji}
          </span>
        }
        {this.props.icon &&
          <img
            className={(this.props.rotate ? "rotated" : "")}
            src={this.props.icon}
          />
        }
      </div>
    );
  }

}
