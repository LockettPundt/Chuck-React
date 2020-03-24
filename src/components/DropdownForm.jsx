import React, { Component } from "react";

import "../fetch.js";

class Dropdown extends Component {
  render() {
    return (
      <form className="dropdown" id="categorySelect">
        <button className="buttonStyle" type="submit" id="submitButton">
          SUBMIT!
        </button>
      </form>
    );
  }
}

export default Dropdown;