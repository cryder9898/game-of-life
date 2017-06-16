import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chris',
    }
  }

  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>Game of Life</h2>
        </div>
        <button type='submit' onClick={this.change}>click</button>
      </div>
    );
  }
}

export default App;
