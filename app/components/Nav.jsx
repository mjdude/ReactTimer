var React = require('react');
var Nav = React.createClass({

  render: function(){
    return (

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">React Time App</li>
              <li><a href='#'>Timer</a></li>
              <li><a href='#'>Countdown</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <p>Created By Mo</p>
          </div>
        </div>

    );
  },

});

module.exports = Nav;