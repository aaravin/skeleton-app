import axios from 'axios';

export function getMessages() {
	return axios.get('/api/v1/messages').then((response) => {
		return response.data;
	});
}