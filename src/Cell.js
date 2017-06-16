import React, { Component } from 'react';

const Cell = ({loc}) => {
  const button = () => {
    console.log(loc);
  }
  return (
      <div className='cell' onClick={button}>

      </div>
  );
}

export default Cell;
