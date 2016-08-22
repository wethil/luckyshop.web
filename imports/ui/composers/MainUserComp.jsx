import React from 'react';
import { composeWithTracker } from 'react-komposer'
import MainPage from '../components/mainPage/MainPage.jsx'
import { browserHistory } from 'react-router';
const composer = (props,onData) => {

if (Meteor.userId())	
	{

		thisUser = Meteor.userId();
		console.log(thisUser)
		const subscription = Meteor.subscribe('thisUser',thisUser)
		if (subscription.ready()) {
			
			const user = Meteor.users.findOne({_id:thisUser})
			console.log(user)
		
			onData(null,{user})
		}

	} else {
		 browserHistory.push('/');
	}





}


export const MainUserComp = composeWithTracker (composer) (MainPage);
