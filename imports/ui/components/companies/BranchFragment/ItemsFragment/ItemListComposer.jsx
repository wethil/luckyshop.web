import React from 'react';
import { composeWithTracker } from 'react-komposer'
import Items from '../../../../../api/items/items.js'
import ItemList from './ItemList.jsx'

const composer = (props,onData) => {
	branch = props.branch

	const subscription = Meteor.subscribe('thisBranchesItems',branch)
	if (subscription.ready()) {
		
		const items = Items.find({branchId:branch}).fetch()
		console.log(items)
		
	
		onData(null,{items})
	}
}


export const ItemListComposer = composeWithTracker (composer) (ItemList);
