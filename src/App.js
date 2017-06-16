import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chris',
    }
  }

  change = () => {
    const newState = this.state.name;
    newState.first = 'bob';
    this.setState({name: newState});
  }

  render() {
    return (
      <div className="app">
        <div className="App-header">
          <h2>{this.state.name}</h2>
        </div>
        <button type='submit' onClick={this.change}>click</button>
      </div>
    );
  }
}

export default App;
