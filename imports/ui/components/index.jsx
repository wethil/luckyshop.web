import React from 'react';
import { Meteor } from 'meteor/meteor';
import MainPage from './mainPage/MainPage.jsx'
import MainPageContent from './mainPage/MainPageContent.jsx'
import Footer from './Footer.jsx'
import {LandingNavBar} from './landingPage/LandingNavBar.jsx'
import {LandingBody} from './landingPage/LandingBody.jsx'
import Register from './userAccount/Register.jsx'
import Login from './userAccount/Login.jsx'
import { browserHistory } from 'react-router';
import { Menu } from 'semantic-ui-react'
import CompaniesMain from './companies/CompaniesMain.jsx'



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
			
		<div className="ui middle aligned center aligned grid" style={styles.main}>
		  <div className="column" style={{maxWidth:450}} >
		    <h2 className="ui pink image header">
		      <div className="content">
		        lucky2shop
		      </div>
		    </h2>
		    <form className="ui large form">
				<Login />
		      <div className="ui error message"></div>

		    </form>


		     <form className="ui large form">
		      	<Register />

		    </form>

		 
		  </div>
		</div>


		);
	}
});


export default Index;



const styles = {
	main:{
		backgroundImage: 'url("bg.jpg")',
		height:'100vh',
		backgroundSize:'cover'
	}
};




 /*
<div style={{backgroundImage: 'url("bg.jpg")'}}>
				  		<div className="row">
				  			<div className="col-md-4">
				  					<Register />
				  			</div>
				  			<div className="col-md-4">
				  					<Login />
				  			</div>
				  		</div>
				  </div>

 */