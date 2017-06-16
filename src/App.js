import React, { Component } from 'react';
import GameBoard from './GameBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chris',
    }
  }

  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>Game of Life</h2>
        </div>
        <div className='container-fluid'>
          <GameBoard />
        </div>
      </div>
    );
  }
}

export default App;
