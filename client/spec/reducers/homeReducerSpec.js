import defaultState from '../../src/js/reducers/defaults/homeDefaults';
import homeReducer from '../../src/js/reducers/homeReducer';
import {SET_MESSAGES} from '../../src/js/actions/homeActions';

describe('HomeReducer', () => {
	let currentState, newState, action;

	it('sets appropriate default state', () => {
		newState = homeReducer(undefined, {});
		expect(newState).toEqual(defaultState);
	});

	describe('SET_MESSAGES action', () => {
		beforeEach(() => {
			action = {type: SET_MESSAGES}
		});

		it('sets showMessage from false to true', () => {
			const messages = Symbol('messages');
			action = {
				type: SET_MESSAGES,
				messages: messages
			}
			newState = homeReducer(defaultState, action);
			expect(newState.messages).toEqual(messages);
		});
	});
});