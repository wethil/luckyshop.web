import React from 'react';
import { composeWithTracker } from 'react-komposer'
import PromoCodeList from '../components/companies/lists/PromoCodeList.jsx'

const composer = (props,onData) => {
	branch = props.branch

	const subscription = Meteor.subscribe('thisBranchesPromos',branch)
	if (subscription.ready()) {
		
		const promoCodes = PromoCodes.find({branchID:branch}).fetch()
		
	
		onData(null,{promoCodes})
	}
}


export const PromoListComposer = composeWithTracker (composer) (PromoCodeList);
