import React from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

 const Login = React.createClass({
	handleLogin(e) {
 		e.preventDefault();

			username = this.refs.username.value.trim()
			password = this.refs.password.value.trim()
				Meteor.loginWithPassword(username, password, function(error){
			if (error) {
				console.log(error)
			} else {
				browserHistory.push('/profile');
			}
		    
		});

		},

	render() {
		return (
			  <div className="ui stacked segment">
		        <div className="field">
		          <div className="ui left icon input">
		            <i className="user icon"></i>
		            <input 
				    	type="text" 
				    	ref="username" 
				    	className="form-control" 
				    	id="reg_username" 
				    	placeholder="Username" />	 
		          </div>
		        </div>
		        <div className="field">
		          <div className="ui left icon input">
		            <i className="lock icon"></i>
		             <input 
				    	type="password"
				    	ref="password" 
				    	className="form-control" 
				    	id="reg_pass" 
				    	placeholder="Password" />
		          </div>
		        </div>
		        <div className="ui fluid large basic teal submit button" onClick={this.handleLogin}>
		        Login</div>
		      </div>

		);
	}
});

export default Login;			




