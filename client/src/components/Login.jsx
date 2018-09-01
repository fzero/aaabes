import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <section className="noDescription">
        <h3>Login!</h3>
        <form>
          <label>
            Email: 
            <input type="email" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    )
  }
}

export default Login
