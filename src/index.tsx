import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './App';

import './index.scss';

const routerBaseName = process.env.REACT_APP_PUBLIC_URL || '/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={routerBaseName}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
