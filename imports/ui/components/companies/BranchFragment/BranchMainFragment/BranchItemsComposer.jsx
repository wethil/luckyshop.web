import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Items from '../../../../../api/items/items.js'
import BranchItemsList from './BranchItemsList.jsx'

const composer = (props,onData) => {
	branchId = props.branch
	company = props.company

	const subscription = Meteor.subscribe('thisBranchesItemsForSell',branchId)
	if (subscription.ready()) {
		
		const items = Items.find({branchId:branchId}).fetch()
		console.log(items)

		if(branchId==company.profile.branchId){
			control=true
			title=""
		}else{
			control=false,
			title="boss"

		}
		
	
		onData(null,{items,branchId,control,title})
	}
}


export const BranchItemsComposer = composeWithTracker (composer) (BranchItemsList);
