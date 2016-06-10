var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
      it('should render pause when started', () => {
        var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"></Controls>);
        var $el = $(ReactDom.findDOMNode(controls));
        var $pauseButton = $el.find('button:contains(Pause)');

        expect($pauseButton.length).toBe(1);

      });
    });
});
