import React from 'react';
import Cell from './Cell';

const GameBoard = ({switchCell, isRunning, board}) => {

  // swap dead and alive cells on board
  const swap = (css, loc) => {
    let i = loc[0];
    let j = loc[1];
    if (css === 'alive') {
      switchCell(i, j, 0);
    } else {
      switchCell(i, j, 1);
    }
  } 

  return (
    <div className='board'>
      {board.map((row, i) => {
        return row.map((col, j) => {
          return (
            <Cell
              key={[i, j]}
              loc={[i, j]}
              isAlive={board[i][j]}
              swap={swap}
            />
          );
        })
      })}
    </div>
  );
}

export default GameBoard;
