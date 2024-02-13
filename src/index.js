import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './mediaquery/breakpoint-1200.css';
import './mediaquery/breakpoint-992.css';
import './mediaquery/breakpoint-768.css';
import './mediaquery/breakpoint-576.css';
import './mediaquery/breakpoint-356.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
