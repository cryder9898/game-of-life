import React, { Component } from 'react';
import GameBoard from './GameBoard';
import TopPanel from './TopPanel';

class App extends Component {
  constructor(props) {
    super(props);
    let board = this.resetBoard();
    this.state = {
      board: board,
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
    return board;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  randomizeLife = () => {
    let board = this.state.board;
    const cLen = board.length;
    const rLen = board[0].length;
    for (let i = 0; i < 50; i++) {
      let cols = this.getRndInteger(0, cLen);
      //console.log('Col: ', cols);
      let rows = this.getRndInteger(0, rLen);
      //console.log('Row: ', rows);
      board[cols][rows] = 1;
    }
   this.setState({board: board});
  }

  // initializes board
  componentDidMount() {
    this.resetBoard();
    this.randomizeLife();
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
        <TopPanel
          onReset={this.reset}
        />
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
