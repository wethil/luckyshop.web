import React from 'react';
import { IndexLink, Link } from 'react-router';
 const Navigation = React.createClass({
	render() {
		return (
			        <div id="navbar">
				        <nav className="navbar navbar-ct-primary" role="navigation">
				          <div className="container-fluid">
				            <div className="navbar-header">    
				              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">    
				                <span className="sr-only">Toggle navigation</span>   
				                <span className="icon-bar"></span>   
				                <span className="icon-bar"></span>
				                <span className="icon-bar"></span>
				              </button>   
				             <IndexLink to="/" activeClassName="active">  <a className="navbar-brand" href="#">Luckyshop</a> </IndexLink>
				            </div>
				            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">    
				              <ul className="nav navbar-nav">
				                <li><a href="#">Work in progress...</a></li>
				                <li className="active"><a href="#">Link</a></li>
				                <li><a href="#">Link</a></li>
				                <li className="dropdown">
				                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
				                  <ul className="dropdown-menu">
				                    <li><a href="#">Action</a></li>
				                    <li><a href="#">Another action</a></li>
				                    <li><a href="#">Something else here</a></li>
				                    <li className="divider"></li>
				                    <li><a href="#">Separated link</a></li>
				                    <li className="divider"></li>
				                    <li><a href="#">One more separated link</a></li>
				                  </ul>
				                </li>
				              </ul>
				            </div>
				          </div>
				        </nav>
				    </div> 
		);
	}
});

export default Navigation



   