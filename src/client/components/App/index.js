import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import Meetups from '../Meetups';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BlackSeaCoders Meetups</h1>
        </header>

        <Meetups />
      </div>
    );
  }
}

export default App;
