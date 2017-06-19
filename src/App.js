import React, { Component } from 'react';
import GameBoard from './GameBoard';
import TopPanel from './TopPanel';

class App extends Component {
  constructor(props) {
    super(props);
    let board = this.createBoard();
    this.randomizeLife(board);
    this.state = {
      board: board,
      play: false,
      generation: 0,
    }
  }

  // creates the board
  createBoard = () => {
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
    return board;
  }

  reset = () => {
    let board = this.createBoard();
    this.randomizeLife(board);
    this.setState({board: board});
  }

  //returns an integer between min and max, excluding max number
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  randomizeLife = (board) => {
    const cLen = board.length;
    const rLen = board[0].length;
    for (let i = 0; i < 50; i++) {
      let cols = this.getRndInteger(0, cLen);
      //console.log('Col: ', cols);
      let rows = this.getRndInteger(0, rLen);
      //console.log('Row: ', rows);
      board[cols][rows] = 1;
    }
    return board;
  }

  switchCell = (i, j, state) => {
    let board = this.state.board;
    board[i][j] = state;
    this.setState({board: board});
  }

  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>Game of Life</h2>
        </div>
        <div>
          <TopPanel
            onReset={this.reset}
          />
          <GameBoard
            switchCell={this.switchCell}
            isRunning={this.state.play}
            board={this.state.board}
          />
        </div>
      </div>
    );
  }
}

export default App;
