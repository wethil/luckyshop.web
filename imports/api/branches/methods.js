import { Meteor } from 'meteor/meteor';
import Branches from './branches.js'
import PromoCodes from '../PromoCodes/promoCodes.js'

Meteor.methods({
	addBranchAsHeadQuarter :  function (name,adress,loc,plan,paymentInf) {
		branch = Branches.insert({
			name:name,
			adress:adress,
			loc:loc,
			headQuarter:true,
			plan:plan,
			paymentInf:paymentInf
		})

		return Meteor.users.update(this.userId, {$set: { 'profile.branchId': branch }});
	},
	addBranchAsBranch :  function (name,adress,loc,plan,paymentInf,headQuarterId) {
	branch =	Branches.insert({
			name:name,
			adress:adress,
			loc:loc,
			headQuarterId:headQuarterId,
			plan:plan,
			paymentInf:paymentInf

		})
	return Meteor.users.update(this.userId, {$set: { 'profile.branchId': branch }});
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

