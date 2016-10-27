import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import homeReducer from './homeReducer.js';

export default combineReducers({
	routing: routerReducer,
	home: homeReducer
});