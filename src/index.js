import React from 'react';
import ReactDOM from 'react-dom';
import './shared/index.css';
import App from './shared/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
    <App name={window.__INITIAL_DATA__} />
    {/* <App name='verma'/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

