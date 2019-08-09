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
    };

    Device.list();
  }

  onDeleteClicked = () => {
    this.setState({ isDeleteModalVisible: true });
  }

  onAddClicked = () => {
    this.setState({ isAddingDevice: !this.state.isAddingDevice });
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
          className="input-device-name"
          type="text"
          placeholder="Enter the device name"
        />
        <ButtonIcon
          icon={require("../../assets/img/checked.svg")}
          onClick={this.onDeleteClicked}
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
              icon={require("../../assets/img/delete.svg")}
              onClick={this.onDeleteClicked}
            />
            <ButtonIcon
              icon={require("../../assets/img/plus.svg")}
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
          content="Are you sure you want to delete the selected devices?"
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
