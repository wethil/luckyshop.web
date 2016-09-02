import { Meteor } from 'meteor/meteor';
import Branches from './branches.js'
import PromoCodes from '../PromoCodes/promoCodes.js'

Meteor.methods({
	addBranch :  function (name,city,storeID,lat,lng) {
		Branches.insert({
			name:name,
			city:city,
			country:'Netherlands',
			storeID:storeID,
			  loc: {
                type: "Point",
                coordinates : [lat,lng]
            }
		})
	},


	deleteBranch : function (branch) {
		Branches.remove(branch)
		PromoCodes.remove({branchID:branch})

	}


});

Meteor.methods({
	addPlan :  function (plan,branch) {
		Branches.update({_id:branch}, {$set:{'plan':plan}})
	}
});

