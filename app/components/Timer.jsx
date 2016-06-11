var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'paused'
    }
  },

  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus,
    });
  },

  render: function(){
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;

    };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}></Clock>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
