import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountriesProvider from './context/dataContext';
import { ThemeProvider } from './context/themeContext';
import './styles/globals.scss';

ReactDOM.render(
  <ThemeProvider>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </ThemeProvider>,
  document.getElementById('app')
);
