import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { Router, browserHistory } from 'react-router';
const routes = require('./config/routes');

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
