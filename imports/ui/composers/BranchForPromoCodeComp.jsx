import React from 'react';
import { composeWithTracker } from 'react-komposer'
import PersonalMain from '../components/personalUser/PersonalMain.jsx'

const composer = (props,onData) => {
	
	const subscription = Meteor.subscribe('branchForPromoCode')
	if (subscription.ready()) {
		
		branches = Branches.find().fetch()
		count = Branches.find().count()
		nth = Math.floor(Math.random() * count);

		const branch = branches[nth]
		
	
		onData(null,{branch})
	}
}


export const BranchForPromoCodeComp = composeWithTracker (composer) (PersonalMain);
