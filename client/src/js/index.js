import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

require.context("../static/", true, /\.(ico|html|txt)$/);

ReactDOM.render(<App />, document.getElementById('app'));