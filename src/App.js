import React, { Component } from 'react';
import GameBoard from './GameBoard';
import TopPanel from './TopPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      generation: 0,
    }
  }

  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>Game of Life</h2>
        </div>
        <TopPanel
          onReset={this.reset}/>
        <GameBoard
          isRunning={this.state.play}
        />
      </div>
    );
  }
}

export default App;
