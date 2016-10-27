import _ from 'lodash';
import homeDefaults from './defaults/homeDefaults.js';
import {SET_MESSAGES} from '../actions/homeActions.js';

export default function(state = homeDefaults, action) {
	let newState = _.cloneDeep(state);

	switch(action.type) {
		case SET_MESSAGES:
			newState.messages = action.messages;
			break;
	}

	return newState;
}