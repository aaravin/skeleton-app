import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {Home} from '../../src/js/components/Home';

describe('Home', function() {
	let component,
		getMessagesStub = jasmine.createSpy('getMessages'),
		messages = ['test message 1', 'test message 2'];

	beforeEach(function() {
		component = TestUtils.renderIntoDocument(<Home getMessages={getMessagesStub} 
													   messages={messages} />);
	});

	describe('#componentDidMount', () => {
		it('calls getMessages', function() {
			expect(getMessagesStub).toHaveBeenCalled();
		});
	});

	describe('rendering', () => {
		it('renders list of messages from prop', () => {
			const renderedMessages = TestUtils.scryRenderedDOMComponentsWithClass(component, 'message');
			renderedMessages.map((renderedMessage, i) => {
				expect(renderedMessage.textContent).toEqual(messages[i]);
			});
		});
	});
});