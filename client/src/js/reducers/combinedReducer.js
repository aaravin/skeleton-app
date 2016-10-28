import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import homeReducer from './homeReducer';

export default combineReducers({
	routing: routerReducer,
	home: homeReducer
});