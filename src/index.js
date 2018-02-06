/*global document*/
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars
import { createStore } from 'redux';

import { ipcRenderer } from 'electron'; // eslint-disable-line no-unused-vars

import './assets/scss/main.scss';
import App from './components/App'; // eslint-disable-line no-unused-vars
import cp from 'child_process'; // eslint-disable-line no-unused-vars
import reducer from './reducers/index';

const store = createStore(reducer)
  , root = document.createElement('div');

root.id = 'root';
document.body.appendChild(root);

//const child = cp.fork('http-info.js');

// child.on('message', message => {
//   console.info(message);
// });


//ipcRenderer.send('pid-message', child.pid);

// Render the App into root
render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);
