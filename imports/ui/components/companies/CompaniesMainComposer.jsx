import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Branches from '../../../api/branches/branches.js'
import CompaniesMain from './CompaniesMain.jsx'

const composer = (props,onData) => {
	company=props.company
	branch = props.company.profile.branchId


	const subscription = Meteor.subscribe('thisBranch',branch)
	if (subscription.ready()) {
		
		const branch = Branches.findOne({branchId:branch})
		
		
	
		onData(null,{branch,company})
	}
}


export const CompaniesMainComposer = composeWithTracker (composer) (CompaniesMain);
