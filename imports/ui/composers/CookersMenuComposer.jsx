/*
import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Cookers from '../../api/cookers/cookers.js'
import CookersMenu from '../components/cookers/CookersMenu.jsx'
const composer = (props,onData) => {
	//console.log('y_id = ' + yellId)
	const subscription = Meteor.subscribe('allCookers')
	if (subscription.ready()) {
		
		const cookers = Cookers.find().fetch()
	
		onData(null,{cookers})
	}
}

export const CookersMenuComposer = composeWithTracker (composer) (CookersMenu);


*/