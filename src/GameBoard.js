import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
    }
  }

  // initializes board
  componentWillMount() {
    this.resetBoard();
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

  swap = (css, loc) => {
    let board = this.state.board;
    this.setState(() => {
      let i = loc[0];
      let j = loc[1];
      if (css === 'alive') {
        board[i][j] = 0;
      } else {
        board[i][j] = 1;
      }

      return {board: board};
    });
  }

  render() {
    return (
      <div className='board'>
        {this.state.board.map((col, i) => {
          return col.map((row, j) => {
            return (
              <Cell
                key={[i, j]}
                loc={[i, j]}
                isAlive={this.state.board[i][j]}
                swap={this.swap}
              />
            );
          })
        })}
      </div>
    );
  }
}

export default GameBoard;
