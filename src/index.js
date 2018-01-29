import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// Create one root node for HtmlWebpackPlugin
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Render the App into root
render( <App />, document.getElementById('root') );
