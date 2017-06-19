import React, { Component } from 'react';
import GameBoard from './GameBoard';
import TopPanel from './TopPanel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      play: false,
      generation: 0,
    }
  }

  // creates the board
  resetBoard = () => {
    const cols = 20;  // # of columns
    const rows = 30;  // # of rows
    let board = [];
    for (let i = 0; i < cols; i++) {
      let row = [];
      for (let j = 0; j < rows; j++) {
        row.push(0);
      }
      board.push(row);
    }

    this.setState({board: board});
  }

  // initializes board
  componentWillMount() {
    this.resetBoard();
  }

  switchCell = (i, j, state) => {
    let board = this.state.board;
    
    this.setState(() => {
      board[i][j] = state;
      return board;
    });
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
          switchCell={this.switchCell}
          isRunning={this.state.play}
          board={this.state.board}
        />
      </div>
    );
  }
}

export default App;
