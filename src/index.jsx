import React from 'react';  //これはブラウザとアプリ開発共通
import ReactDOM from 'react-dom'; //これはブラウザ特化

import App from './components/app';

ReactDOM.render(<App />, document.querySelector('.container'));
