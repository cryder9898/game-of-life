import React from 'react';
import PropTypes from 'prop-types';

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

TopPanel.propTypes = {
  onClear: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  execGame: PropTypes.func.isRequired,
  gen: PropTypes.number.isRequired,
}

export default TopPanel;
