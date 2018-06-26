import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>Join the slack community to stay in touch</p>
          <a href="https://happy-learning.herokuapp.com/ " target="_blank"><img alt="Join Slack" height="40" width="139" src="http://i.imgur.com/0Lne5Vr.png"/></a>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
