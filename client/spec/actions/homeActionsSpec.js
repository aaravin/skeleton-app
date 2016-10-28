import $ from 'jquery';

import { SET_MESSAGES, setMessages, getMessages } from '../../src/js/actions/homeActions';
import * as apiService from '../../src/js/services/apiService';

describe('HomeActions', () => {
	let dispatch;

	beforeEach(() => {
		dispatch = jasmine.createSpy('dispatch').and.callFake((action) => {
			expect(action.type).not.toBeUndefined('ActionType must be defined');
		});
	});

	describe('setMessages', () => {
		it('returns an action of type SET_MESSAGES', () => {
			const messages = Symbol('message');
			const action = setMessages(messages);
			expect(action).toEqual({
				type: SET_MESSAGES,
				messages: messages
			});
		});
	});

	describe('getMessages', () => {
		it('dispatches setMessages with response from apiService.getMessages', (done) => {
			const messages = Symbol('messages');
			const deferred = $.Deferred();
			const getMessagesStub = spyOn(apiService, 'getMessages').and.callFake(() => { return deferred; });

			deferred.resolve({ messages: messages });
			getMessages()(dispatch).then(() => {
				expect(dispatch).toHaveBeenCalledWith(setMessages(messages));
				done();
			});
		});
	});
});