import React, { Component } from "react";

class ChuckModal extends Component {
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span id="closeModal" className="close-modal">
            X
          </span>
          <p className="chuckSays">...</p>
        </div>
      </div>
    );
  }
}

export default ChuckModal;
