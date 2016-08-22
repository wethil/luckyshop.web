import React from 'react';
import { composeWithTracker } from 'react-komposer'
import PersonalPromoCodesList from '../components/personalUser/PersonalPromoCodesList.jsx'

const composer = (props,onData) => {
	
	user = Meteor.userId();
	const subscription = Meteor.subscribe('promoWithBranch',user)
	if (subscription.ready()) {
		const promoCodes = PromoCodes.find({createdBy:user}).fetch()
		console.log(promoCodes)
		onData(null,{promoCodes})
	}
}

export const UserPromosComposer = composeWithTracker (composer) (PersonalPromoCodesList);
