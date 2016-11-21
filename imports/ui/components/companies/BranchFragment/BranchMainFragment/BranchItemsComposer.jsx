import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Items from '../../../../../api/items/items.js'
import BranchItemsList from './BranchItemsList.jsx'

const composer = (props,onData) => {
	branch = props.branch

	const subscription = Meteor.subscribe('thisBranchesItemsForSell',branch)
	if (subscription.ready()) {
		
		const items = Items.find({branchId:branch}).fetch()
		console.log(items)
		
	
		onData(null,{items})
	}
}


export const BranchItemsComposer = composeWithTracker (composer) (BranchItemsList);
