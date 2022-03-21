import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from './components/timer';
import Counter from './components/counter';

ReactDOM.render(
  <React.StrictMode>
    <Timer />
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);