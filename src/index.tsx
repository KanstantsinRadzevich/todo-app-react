import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import ThemeProvider from './common/theme/provider'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


