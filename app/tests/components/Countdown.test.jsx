  var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
      it('should set state to started and countdown', (done) => {
        //setup , render component
        var countdown = TestUtils.renderIntoDocument(<Countdown></Countdown>);
        countdown.handleSetCountdown(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        }, 1001);


      });

      it('should never set count less than zero', (done) => {
        //setup , render component
        var countdown = TestUtils.renderIntoDocument(<Countdown></Countdown>);
        countdown.handleSetCountdown(1);

        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 3001);


      });

      it('should pause countdown on pause status', (done) => {
          var countdown = TestUtils.renderIntoDocument(<Countdown></Countdown>);
          countdown.handleSetCountdown(3);
          countdown.handleStatusChange('paused');

          setTimeout(() => {
            expect(countdown.state.count).toBe(3);
          }, 1001);
          done();

      });

      it('should stop countdown on stopped status', (done) => {
          var countdown = TestUtils.renderIntoDocument(<Countdown></Countdown>);
          countdown.handleSetCountdown(3);
          countdown.handleStatusChange('stopped');

          setTimeout(() => {
            expect(countdown.state.count).toBe(0);
          }, 1001);
          done();

      });

    });
});
