import * as apiService from '../services/apiService';

export const SET_MESSAGES = 'SET_MESSAGES';

// ACTION CREATORS

export function setMessages(messages) {
	return {
		type: SET_MESSAGES,
		messages: messages
	}
}



// ACTION DISPATCHERS

export function getMessages() {
	return function(dispatch) {
		return apiService.getMessages().then((response) => {
			dispatch(setMessages(response.messages));
		});
	};
}