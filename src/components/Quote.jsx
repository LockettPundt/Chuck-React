import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Chuck Says...',
    };
  }


  render() {
    const { quote } = this.state;
    return (
      <div>
        <p>{quote}</p>
      </div>
    );
  }
}

export default Quote;
