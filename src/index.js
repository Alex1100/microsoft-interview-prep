import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(<App />, document.getElementById('app'));
