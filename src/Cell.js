import React from 'react';

const Cell = ({swap, loc, isAlive}) => {

  const handleSwap = (event) => {
    swap(
      event.target.className,
      loc,
    );
  }

  return (
      <div
        value={loc}
        className={isAlive ? 'alive' : 'dead'}
        onClick={handleSwap}
      />
  );
}

export default Cell;
