import React, { Component } from 'react';
import Homepage from './homePage.jsx'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div><Homepage /></div>
      </div>
    )
  }
}

export default Container;
