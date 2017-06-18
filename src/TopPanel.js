import React from 'react';

const TopPanel = ({onReset}) => {
  const handleReset = () => {
    onReset();
  }
  return (
    <div className='top-panel'>
      <button>Start</button>
      <button>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TopPanel;
