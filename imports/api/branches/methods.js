import { Meteor } from 'meteor/meteor';
import Branches from './branches.js'

Meteor.methods({
	addBranch :  function (name,city,storeID) {
		Branches.insert({
			name:name,
			city:city,
			country:'Netherlands',
			storeID:storeID
		})
	}
});

