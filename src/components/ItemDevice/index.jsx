import React, { Component } from 'react';
import "./index.css";
import Device from '../../control/actions/Device';
import ButtonCheckbox from '../buttons/ButtonCheckbox';

export default class ItemDevice extends Component {

  constructor(props) {
    super(props);
    console.log('device', props.device);
    this.state = {
      checked: props.device.lastState,
    }
  }

  onStateToggled = () => {
    this.setState({ checked : !this.state.checked}, ()=> {
      Device.set(this.props.device.id, this.state.checked);
    });
  }

  onSelectedToggled = () => {
    if (this.props.onSelectedToggled) {
      this.props.onSelectedToggled();
    }
  }

  render() {
    return (
      <div className="item-device">
        <ButtonCheckbox 
          checked={this.props.selected}
          onToggled={this.onSelectedToggled}
        />
        <span>💡</span>
        <span className="device-name">{this.props.device.name}</span>
        <label class="switch">
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onStateToggled}
          />
          <span class="slider"/>
        </label>
      </div>
    );
  }
  
}
