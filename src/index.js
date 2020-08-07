import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import '@atlaskit/css-reset';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
