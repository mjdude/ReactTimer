var React = require('react');

var CoundownForm = React.createClass({
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">

        </form>
      </div>
    );
  }
});
