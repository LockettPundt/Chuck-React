import React, { Component } from "react";

import * as fetch from "../fetch.js";

class Dropdown extends Component {
  
  render() {
    const categories = fetch.getCategory();
    console.log(categories);
    
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