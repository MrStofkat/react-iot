import React, { Component } from 'react';
import "./index.css";
import Button from '../buttons/Button';

class ModalPopup extends Component {
  state = { visible: false }

  onCanceled = () => {
    if (this.props.onCanceled) {
      this.props.onCanceled();
    }
  }

  onConfirmed = () => {
    if (this.props.onConfirmed) {
      this.props.onConfirmed();
    }
  }

  render() {
    // when invisible render nothing
    if (!this.props.visible) return null;
    // otherwise render the full modal popup
    return (
      <div className="modal-popup">
        <div className="container-popup">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          {this.props.isConfirmation &&
            <div className="container-buttons">
              <Button title="No" onClick={this.onCanceled} />
              <Button title="Yes" onClick={this.onConfirmed} />
            </div>
          }
          {!this.props.isConfirmation &&
            <Button title="OK" onClick={this.onConfirmed} />
          }
        </div>
      </div>
    );
  }
}

export default ModalPopup;