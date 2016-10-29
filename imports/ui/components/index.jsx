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
			 <CompaniesMain />
		);
	}
});


export default Index;



/*
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
<div className="className">
               <LandingNavBar />
                <LandingBody />
              </div>



              <div className="className">
			 	<Menu color='pink' fixed="left" inverted vertical >
			 		  <Menu.Item>
			        	 <Menu.Header>lucky2shop</Menu.Header>
			        </Menu.Item>
			        <Menu.Item > 
			        		<Menu.Header>Home Page</Menu.Header>
			        </Menu.Item>
			        

			 	</Menu>
			 	<MainPageContent />
			 </div>				  


				  */