import React, { Component } from 'react';
import Cell from './Cell';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      col: 20,
      row: 30,
    }
  }

  // initializes board
  componentWillMount() {
    this.resetBoard();
  }

  resetBoard = () => {
    let board = [];
    for (let i = 0; i < this.state.col; i++) {
      let row = [];
      for (let j = 0; j < this.state.row; j++) {
        row.push(0);
      }
      board.push(row);
    }
    console.log(board);
    this.setState({board: board});
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
              />
            );
          })
        })}
      </div>
    );
  }
}

export default GameBoard;
