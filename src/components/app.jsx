import React, { Component } from 'react';

import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handlePlaceSubmit(place) {
  console.log(place);
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={place => this.handleSubmit(place)} />
      </div>
    );
  }
}

export default App;
