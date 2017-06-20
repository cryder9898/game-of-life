import React from 'react';

const TopPanel = ({onClear, onPause, execGame, gen}) => {
  const handleClear = () => {
    onClear();
  }

  const playGame = () => {
    execGame();
  }

  const handlePause = () => {
    onPause();
  }

  return (
    <div className='top-panel'>
      <button onClick={playGame}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleClear}>Clear</button>
      Generations: {gen}
    </div>
  );
};

export default TopPanel;
