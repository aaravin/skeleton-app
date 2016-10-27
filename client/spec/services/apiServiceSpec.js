import $ from 'jquery';
import axios from 'axios';

import * as apiService from '../../src/js/services/apiService.js';

describe('ApiService', () => {
	describe('getMessages', () => {
		it('makes a get request to the messages path', (done) => {
			const data = Symbol('data');
			const deferred = $.Deferred();
			const getStub = spyOn(axios, 'get').and.callFake(() => { return deferred; });
			
			apiService.getMessages().then((response) => {
				expect(response).toEqual(data);
				done();
			});
			deferred.resolve({ data: data });
		});
	});
});