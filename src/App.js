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
      play: null,
      generation: 0,
    }
  }

  createBoard = () => {
    const cols = 40;  // # of columns
    const rows = 40;  // # of rows
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
    if (this.state.play) {
      clearInterval(this.state.play);
    }
    let board = this.createBoard();
    this.setState({board: board, generation: 0, play: null});
  }

  //returns an integer between min and max, excluding max number
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  randomizeLife = (board) => {
    const cLen = board.length;
    const rLen = board[0].length;
    for (let i = 0; i < cLen * 10; i++) {
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

  getLiveNeighbors = (row, col) => {
    let neighbors = [[0,-1],[0,1],[-1,0],[1,0],[-1,-1],[1,1],[1,-1],[-1,1]];
    //finds neighbors
    neighbors = neighbors.filter((loc) => {
      loc[0] += row;
      loc[1] += col;
      return loc[0] >= 0 && loc[1] >= 0 && loc[0] < this.state.board.length && loc[1] < this.state.board[0].length && this.state.board[loc[0]][loc[1]] === 1;
    });
    return neighbors.length;
  }

  // the game of life begins
  execGame = () => {
    let start = setInterval(() => {
      console.log('Generation: ', this.state.generation);
      let board = this.state.board;

      //iterate through board and make a generation
      board = board.map((row, rIndex) => {
        return row.map((cell, cIndex) => {

          let liveNeighbors = this.getLiveNeighbors(rIndex, cIndex);

          console.log('at Loc: ' + rIndex + "," + cIndex + ' there are ' + liveNeighbors + ' living neighbors');

          if (cell === 1) {
            // Alive Cell

            // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation
            if (liveNeighbors < 2 ) {
              return 0;
            }

            // Any live cell with more than three live neighbours dies, as if by overpopulation.
            if (liveNeighbors > 3) {
              return 0;
            }

            return 1;
          } else {
            // Dead cell

            if (liveNeighbors === 3) {
              //ITS ALIVE!!!
              return 1;
            }

            return 0;
          }
        }); // inner map
      }); // outter map

      let generation = this.state.generation + 1;
      this.setState({generation: generation, board: board});

    }, 50); // end of setInterval()

    this.setState({play: start});
  }

  componentWillUnMount() {
    this.pause();
  }

  pause = () => {
    this.state.play && clearInterval(this.state.play);
  }



  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>Game of Life in React.js</h2>
        </div>
        <div>
          <TopPanel
            gen={this.state.generation}
            onClear={this.reset}
            onPause={this.pause}
            execGame={this.execGame}
          />
          <GameBoard
            switchCell={this.switchCell}
            board={this.state.board}
          />
        </div>
      </div>
    );
  }
}

export default App;
