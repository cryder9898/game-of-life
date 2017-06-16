import React, { Component } from 'react';
import GameBoard from './GameBoard';
import TopPanel from './TopPanel';

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
        <TopPanel />
        <GameBoard />
      </div>
    );
  }
}

export default App;
