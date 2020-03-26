import React, { Component } from "react";

// import * as fetch from "../fetch.js";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedOption: '',
      category: "animal",
      quote: '',
    };
  }
  
  
  getCategory = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const json = await response.json();
    const result = json.filter(item => item !== "explicit")
    this.setState({ data: result});
  }
  
  getQuote = async (e) => {
    e.preventDefault();
    const { category } = this.state;
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const json = await response.json();
    let newQuote = json.value;
    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
    this.setState({
      quote: newQuote,
    })
  }
  
  componentDidMount() {
    this.getCategory();
  
  }
  
  newCategory = () => {
    const newValue = document.querySelector('select').value;
    this.setState({
      category: newValue,
    })
  }
  
  closeModalButton = (e) => {
    e.preventDefault();
    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
  };
  
  
  
  
  
  
  
  
  
  render() {
    const { quote } = this.state;
    return (
      <div>
        <form className="dropdown" id="categorySelect">
          <select className="categorySelect" onChange={this.newCategory}>
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
            <span id="closeModal" className="close-modal" onClick={this.closeModalButton}>
              X
            </span>
            <p className="chuckSays">{quote}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;