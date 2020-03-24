import React, { Component } from "react";

// import * as fetch from "../fetch.js";

class Dropdown extends Component {
  
  state = {
    data: [],
  }
  
  async getCategory() {
      const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
      const json = await response.json();
      const result = json.filter(item => item !== "explicit")
      this.setState({ data: result});
  }
  componentDidMount() {
    this.getCategory();
  }
  
  
  render() {
    // console.log("this is the data", this.state.data);
    
    return (
      <form className="dropdown" id="categorySelect">
        <select className="categorySelect">
          {
          this.state.data.map((item) =>  <option name={item} value ={item}>{item}</option>
          )}
        </select>
        <button className="buttonStyle" type="submit" id="submitButton">
          SUBMIT!
        </button>
      </form>
    );
  }
}

export default Dropdown;