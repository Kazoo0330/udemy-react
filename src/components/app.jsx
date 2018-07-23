import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kazooooo',
    };
  }

  handleMouseOver() {
    this.setState({ name: 'KAZOO' });
  }

  handleMouseOut() {
    this.setState({ name: 'kazoo' });
  }

  render() {
    return (
      <div
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
