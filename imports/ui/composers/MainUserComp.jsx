import React from 'react';
import { composeWithTracker } from 'react-komposer'
import MainPage from '../components/mainPage/MainPage.jsx'

const composer = (props,onData) => {
	thisUser = Meteor.userId();
	console.log(thisUser)
	const subscription = Meteor.subscribe('thisUser',thisUser)
	if (subscription.ready()) {
		
		const user = Meteor.users.findOne({_id:thisUser})
		console.log(user)
	
		onData(null,{user})
	}
}


export const MainUserComp = composeWithTracker (composer) (MainPage);
