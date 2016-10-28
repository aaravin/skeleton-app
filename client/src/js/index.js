import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

require('../styles/styles');
require.context('../static/', true, /\.(ico|html|txt)$/);

ReactDOM.render(<App />, document.getElementById('app'));