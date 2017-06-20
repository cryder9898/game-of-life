import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const GameBoard = ({switchCell, board}) => {

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
        return row.map((cell, j) => {
          return (
            <Cell
              key={[i, j]}
              loc={[i, j]}
              isAlive={cell}
              swap={swap}
            />
          );
        })
      })}
    </div>
  );
}

GameBoard.propTypes = {
  switchCell: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
}

export default GameBoard;
