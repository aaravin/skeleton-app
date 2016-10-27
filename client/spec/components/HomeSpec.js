import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {Home} from '../../src/js/components/Home.jsx';

describe('Home', function() {
	let component,
		getMessagesStub = jasmine.createSpy('getMessages');

	beforeEach(function() {
		component = TestUtils.renderIntoDocument(<Home getMessages={getMessagesStub} />);
	});

	describe('#componentDidMount', () => {
		it('calls getMessages', function() {
			expect(getMessagesStub).toHaveBeenCalled();
		});
	});
});