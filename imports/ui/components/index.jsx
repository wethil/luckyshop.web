import React from 'react';
import { Meteor } from 'meteor/meteor';
import MainPage from './mainPage/MainPage.jsx'
import Footer from './Footer.jsx'

import Register from './userAccount/Register.jsx'
import Login from './userAccount/Login.jsx'
import { browserHistory } from 'react-router';



const Index = React.createClass({
	
	componentWillMount() {
		 
		 if (!Meteor.userId()) {
		 	browserHistory.push('/')
		 } else {
		 	browserHistory.push('profile')
		 }
	},
	

	render() {
		return (
				  
				  <div className="container">
				  		<div className="row">
				  			<div className="col-md-4">
				  					<Register />
				  			</div>
				  			<div className="col-md-4">
				  					<Login />
				  			</div>
				  		</div>
				  </div>
		);
	}
});


export default Index;



