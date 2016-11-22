import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import emitter from '../emitter.js'
 const Register = React.createClass({
 		 getInitialState (){
    return {

        userType:'user'
    }
  },

 	handleRegister(e) {
 		e.preventDefault();
			email = this.refs.email.value.trim()
			username = this.refs.username.value.trim()
			password = this.refs.password.value.trim()
			console.log(email)
			console.log(username)
			console.log(password)

			if (this.state.userType=='user') {
				options =  {
			            	email: email,
			                username: username,
			                password: password,
			                profile: {
			                	type:'user',
			                    firstName: 'Fatih',
			                    lastName: 'Dogru',
			                    avatar : 'http://semantic-ui.com/images/avatar/large/stevie.jpg',
			                    credit : 10
			                }
		              }
			} else {
				options =  {
			            	email: email,
			                username: username,
			                password: password,
			                profile: {
			                	type:'company',
			                    firstName: 'Joe',
			                    lastName: 'Doe',
			                    avatar : 'https://pbs.twimg.com/profile_images/641938771022254081/5k8jmHOW.png',
			                    branchId : false,
			                    mapLimit:1,
			                    extraProbability:0
			                }
		               }
			}
		
					Accounts.createUser(options,function(res,error){
		            	if (error) {
		            		console.log(error)
		            	} else {
		            		console.log('user created')
		            		//emitter.emit('userLogin')
				    
		            	}
		            }
		        );
						Meteor.loginWithPassword(username, password, function(error){
										if (error) {
											console.log(error.reason);
										} else {
											console.log('userlogin')
											console.log(Meteor.userId())
											browserHistory.push('/profile');
											
										}
									    
									});
					
						

		},
		
		handleOptionChange(e) {
		  this.setState({
		    userType: e.target.value
		  });
		},

		handlecheck(e){
			e.preventDefault()
			email = this.refs.email.value.trim()
			username = this.refs.username.value.trim()
			password = this.refs.password.value.trim()
			userType = this.state.userType
			console.log( `${email} ${username} ${password}  ${userType} `)
		},
		
		
		handleLog1(){
			console.log('user')
		},
			handleLog2(){
			console.log('company')
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
		            <i className="mail icon"></i>
		             <input 
				    	type="email" 
				    	ref="email"
				    	className="form-control" 
				    	id="reg_email" 
				    	placeholder="Email" />
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
		          <div className="inline fields">
    <div className="field">
      <div className="ui radio checkbox">
          <input 
	        	type="radio" 
	        	name="userType" 
	        	id="optionsRadios1" 
	        	value="user"
	        	onChange={this.handleOptionChange}
	        	checked={this.state.userType == 'user'}
	        	/>
        <label>User</label>
      </div>
    </div>
    <div className="field">
      <div className="ui radio checkbox">
          <input 
	        	type="radio" 
	        	name="userType" 
	        	id="optionsRadios2" 
	        	value="company" 
	        	onChange={this.handleOptionChange}
	        	checked={this.state.userType == 'company'} 
	        	/>
        <label>Company</label>
      </div>
    </div>
  </div>
		        <div className="ui fluid  basic large teal submit button"
		        	onClick={this.handleRegister}>Register</div>
		      </div>
  
		);
	}
});

export default Register;


  
