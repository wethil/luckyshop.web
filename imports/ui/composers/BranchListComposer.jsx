import React from 'react';
import { composeWithTracker } from 'react-komposer'
import BranchList from '../components/companies/lists/BranchList.jsx'

const composer = (props,onData) => {
	thisUser = Meteor.userId();
	console.log(thisUser)
	const subscription = Meteor.subscribe('thisUserBranch',thisUser)
	sub2= Meteor.subscribe('branchesCount')
	if (subscription.ready() && sub2.ready()) {
		
		const branches = Branches.find({storeID:thisUser}).fetch()
		 b_count=Branches.find().count()
		console.log(branches)
		console.log(b_count)
	
		onData(null,{branches,b_count})
	}
}


export const BranchListComposer = composeWithTracker (composer) (BranchList);
