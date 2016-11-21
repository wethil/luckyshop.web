import { Meteor } from 'meteor/meteor';
import '../items.js'


Meteor.publish("thisBranchesItems",function(branch){
	return Items.find({branchId:branch})
})


Meteor.publish("thisBranchesItemsForSell",function(branch){
	return Items.find({branchId:branch,quantity:{$gt: 0}})
})




