import _ from 'lodash';

import homeDefaults from './defaults/homeDefaults';
import {SET_MESSAGES} from '../actions/homeActions';

export default function(state = homeDefaults, action) {
	let newState = _.cloneDeep(state);

	switch(action.type) {
		case SET_MESSAGES:
			newState.messages = action.messages;
			break;
	}

	return newState;
}