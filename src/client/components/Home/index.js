import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>You are not home!</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
      </div>
    );
  }
}

export default Home;
