import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Web3Provider } from 'web3-hooks'
import "bootstrap/dist/css/bootstrap.css" // <- importer bootsrtap, depuis node_modules
import App from './App';
import reportWebVitals from './test/reportWebVitals';

ReactDOM.render(
  <Router>
    <Web3Provider>
      <App />
    </Web3Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
