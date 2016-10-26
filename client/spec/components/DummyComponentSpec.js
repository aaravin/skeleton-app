import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Dummy from '../../src/js/components/DummyComponent.jsx';


describe('dummy', function () {
    it('is dumb', function () {
        expect(true).toBeTruthy();
    });

    it('says hello', function () {
        const component = TestUtils.renderIntoDocument(<Dummy/>);
        const hello = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
        expect(hello.textContent).toEqual('Hello');
    });
});