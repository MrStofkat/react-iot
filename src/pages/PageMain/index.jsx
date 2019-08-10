import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

import './index.css';
import Device from '../../control/actions/Device';
import AppStateComponent from '../../control/AppStateComponent';
import ItemDevice from '../../components/ItemDevice';
import ButtonIcon from '../../components/buttons/ButtonIcon';
import ModalPopup from '../../components/ModalPopup';

class PageMain extends AppStateComponent {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      selectedDevices: [],
      isDeleteModalVisible: false,
      isAddingDevice: false,
      deviceName: "",
    };

    Device.list();
  }

  onDeleteClicked = () => {
    this.setState({ isDeleteModalVisible: true });
  }

  onAddClicked = () => {
    this.setState({ isAddingDevice: !this.state.isAddingDevice });
  }

  onAddConfirmClicked = () => {
    const deviceName = this.state.deviceName;
    this.setState({
      isAddingDevice: false,
      deviceName: ""
    }, () => {
      Device.add(deviceName);
    });
  }

  onConfirmedDelete = () => {
    this.setState({ isDeleteModalVisible: false }, () => {
      Device.delete(this.state.selectedDevices);
    })
  }

  onCanceledDelete = () => {
    this.setState({ isDeleteModalVisible: false }, () => {
      // Nothing to do..
    });
  }

  onDeviceSelectedToggled = (index) => {
    let selectedDevices = [...this.state.selectedDevices];
    selectedDevices[index] = !selectedDevices[index];
    this.setState({ selectedDevices: selectedDevices });
  }

  renderAddDevice() {
    return (
      <div className="container-add-device">
        <input
          type="text"
          className="input-device-name"
          placeholder="Enter the device name"
          value={this.state.deviceName}
          onChange={(event) => { this.setState({ deviceName: event.target.value }) }}
        />
        <ButtonIcon
          // icon={require("../../assets/img/checked.svg")}
          emoji="👍"
          onClick={this.onAddConfirmClicked}
        />
      </div>
    );
  }

  renderDevices() {
    return this.state.devices.map((device, i) => {
      return (
        <ItemDevice
          device={device}
          index={i}
          key={device.address + i}
          selected={this.state.selectedDevices[i]}
          onSelectedToggled={this.onDeviceSelectedToggled}
        />
      );
    });
  }

  render() {
    return (
      <div className="page-main">
        <div className="container-header">
          <h2>Devices</h2>
          <div className="container-header-buttons">
            <ButtonIcon
              // icon={require("../../assets/img/delete.svg")}
              emoji="🗑️"
              onClick={this.onDeleteClicked}
            />
            <ButtonIcon
              rotate={this.state.isAddingDevice}
              // icon={require("../../assets/img/plus.svg")}
              emoji="➕"
              onClick={this.onAddClicked}
            />
          </div>
        </div>
        <Collapse isOpened={this.state.isAddingDevice}>
          {this.renderAddDevice()}
        </Collapse>
        <div className="container-devices">
          {this.renderDevices()}
        </div>
        <ModalPopup
          text="Are you sure you want to delete the selected devices?"
          isConfirmation
          onConfirmed={this.onConfirmedDelete}
          onCanceled={this.onCanceledDelete}
          visible={this.state.isDeleteModalVisible}
        />
      </div>
    );
  }
}

export default PageMain;
