import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Branches from '../../../../api/branches/branches.js'
import BranchesList from './BranchesList.jsx'

const composer = (props,onData) => {

	branch = props.branch


	const subscription = Meteor.subscribe('thisStoresBranches',branch)
	if (subscription.ready()) {
		
		const branches = Branches.find({headQuarterId:branch}).fetch()
		
		
	
		onData(null,{branches})
	}
}


export const BranchesListComposer = composeWithTracker (composer) (BranchesList);
