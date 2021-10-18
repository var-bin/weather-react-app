import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Show it is fixed to the top
  body {
    min-height: 75rem;
    padding-top: 4.5rem;
  }

  svg {
    font-size: 4.8em;
  }

  h5, .h5 {
    letter-spacing: -.06rem;
  }

  h6, .h6 {
    letter-spacing: .1rem;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
