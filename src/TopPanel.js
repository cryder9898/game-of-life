import React from 'react';

const TopPanel = ({onReset, onPause, execGame, gen}) => {
  const handleReset = () => {
    onReset();
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
      <button onClick={handleReset}>Reset</button>
      Generations: {gen}
    </div>
  );
};

export default TopPanel;
