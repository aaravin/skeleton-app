import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import * as Thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import combinedReducer from '../reducers/combinedReducer.js';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  createElement(Component, props) {
  	props = _.merge(props, this.props);

  	return (<Component key={Component.displayName} {...props}/>)
  }

  render() {
  	const newCreateStore = applyMiddleware(Thunk.default)(createStore);
	const store = newCreateStore(combinedReducer);
  	const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
      	<Router history={history} createElement={this.createElement.bind(this)}>
      		<Route path="/" component={NavBar}>
      			<IndexRoute component={Home} />
      		</Route>
      	</Router>
      </Provider>
    );
  }
};