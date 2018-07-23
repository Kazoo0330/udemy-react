import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kazooooo',
    };
  }

  handleNameChange(e) {
    console.log(name);
    this.setState({ name: e.target.value });
  }

  handleKazooClicked() {
    this.setState({ name: 'KAZOO' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={ e => this.handleNameChange(e)}
        />
        <button onClick={() => this.handleKazooClicked()}>I'm KAZOO</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
