/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

// import * as fetch from "../fetch.js";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: 'animal',
      quote: '',
    };
  }


  componentDidMount() {
    this.getCategory();
  }

  getCategory = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const json = await response.json();
    const result = json.filter((item) => item !== 'explicit');
    this.setState({ data: result });
  }

  newCategory = () => {
    const newValue = document.querySelector('select').value;
    this.setState({
      category: newValue,
    });
  }

  getQuote = async (e) => {
    e.preventDefault();
    const { category } = this.state;
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const json = await response.json();
    const newQuote = json.value;
    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
    this.setState({
      quote: newQuote,
    });
  }

  closeModalButton = (e) => {
    e.preventDefault();
    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
  };


  render() {
    const { quote, data } = this.state;
    return (
      <div>
        <form className="dropdown" id="categorySelect">
          <select className="categorySelect" onChange={this.newCategory}>
            {
            data.map((item, index) => <option value={item} key={index}>{item}</option>)
}
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
