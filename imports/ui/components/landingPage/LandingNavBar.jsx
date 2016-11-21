import React from 'react';

export const LandingNavBar = React.createClass({
  render() {
    return (
          <nav className="navbar navbar-transparent navbar-fixed-top" role="navigation">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
      
          </div>{/* /.container */}
        </nav>
    );
  }
});