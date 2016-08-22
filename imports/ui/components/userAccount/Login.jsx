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
			<form>
				  <div className="form-group">
				    <label >Username</label>
				    <input 
				    	type="text" 
				    	ref="username" 
				    	className="form-control" 
				    	id="reg_username" 
				    	placeholder="Username" />	 
				  </div>
				  
				  <div className="form-group">
				    <label >Password</label>
				    <input 
				    	type="password"
				    	ref="password" 
				    	className="form-control" 
				    	id="reg_pass" 
				    	placeholder="Password" />
				  </div>
				  <button 
				  	type="submit" 
				  	className="btn btn-default"
				  	onClick={this.handleLogin}
				  	>Login</button>
			</form>
		);
	}
});

export default Login;			