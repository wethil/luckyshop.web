import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

const Logout = React.createClass({
 getInitialState (){
    return {
        user:1
    }
  },

  componentWillMount() {
  	if (!Meteor.userId()) {
  		browserHistory.push('bye')
  	}
  },
	handleLogout() {
		
		Meteor.logout();
		console.log('click logout')
		if (!Meteor.userId()) {
			browserHistory.push('bye')
			
		} else {
			Meteor.logout();
			browserHistory.push('bye')
	
			this.setState({user:0})
		}
		
		

	},
	
	render() {
		if (!Meteor.userId()) {
  		browserHistory.push('/')
  	}
		return (
			 <button className="btn btn-danger"
		  onClick={this.handleLogout}>Logout</button>
		);
	}
});

export default Logout;