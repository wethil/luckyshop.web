import { Meteor } from 'meteor/meteor';
import Branches from './branches.js'
import PromoCodes from '../PromoCodes/promoCodes.js'

Meteor.methods({
	addBranch :  function (name,adress,loc) {
		Branches.insert({
			name:name,
			adress:adress,
			loc:loc
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

