import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';

import App from '../../src/js/components/App.jsx';

describe('App', function() {
	var component;

	beforeEach(function() {
		component = TestUtils.renderIntoDocument(<App/>);
	});

	it('contains a Provider component', function() {
		TestUtils.findRenderedComponentWithType(component, Provider);
	});
});