import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="component">
        <h3>Register a new account!</h3>
        <form className="register">
          Email:<br/>
          <input type="email" /><br/>
          Username:<br/>
          <input type="text" /><br/>
          Password:<br/>
          <input type="password" /><br/>
          Confirm Password:<br/>
          <input type="password" /><br/>
          <button><Link to={'/'}>Return</Link></button>
          <button><Link to={'/createmneumonic'}>Submit</Link></button>
        </form>
      </section>
    );
  }
}

export default Register;
