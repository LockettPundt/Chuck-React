import React, { Component } from "react";

// import * as fetch from "../fetch.js";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedOption: '',
    };
  }
  
  
  getCategory = async () => {
      const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
      const json = await response.json();
      const result = json.filter(item => item !== "explicit")
      this.setState({ data: result});
  }
  getQuote = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=animal');
    const json = await response.json();
    console.log("THis is the quote:", json.value);
  }
  
  componentDidMount() {
    this.getCategory();
  
  }
  
  
  
  
  
  
  render() {
   // let modalStatus;
    return (
      <div>
        <form className="dropdown" id="categorySelect">
          <select className="categorySelect">
            {
            this.state.data.map((item) =>  <option value={item}>{item}</option>
            )}
          </select>
          <button className="buttonStyle" type="submit" id="submitButton" onClick={this.getQuote}>
            SUBMIT!
          </button>
        </form>
        <div className="modal-overlay">
        <div className="modal-content">
          <span id="closeModal" className="close-modal">
            X
          </span>
          <p className="chuckSays">...</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Dropdown;