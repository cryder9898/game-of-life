import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({swap, loc, isAlive}) => {

  const handleSwap = (event) => {
    swap(
      event.target.className,
      loc,
    );
    console.log(loc);
  }

  return (
    <div
      value={loc}
      className={isAlive ? 'alive' : 'dead'}
      onClick={handleSwap}
    />
  );
}

Cell.propTypes = {
  swap: PropTypes.func.isRequired,
  loc: PropTypes.array.isRequired,
}

export default Cell;
