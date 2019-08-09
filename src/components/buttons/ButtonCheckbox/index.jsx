import React, { Component } from 'react';
import "./index.css";

export default class ButtonCheckbox extends Component {

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
      <label class="button-checkbox">
        {this.props.title}&nbsp;
        <input type="checkbox"   onChange={this.onToggled}/>
        <span class="checkmark"/>
      </label>
    );
  }

}
