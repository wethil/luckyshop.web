import { Meteor } from 'meteor/meteor';
import '../branches.js'

Meteor.publish('branchesCount',function(user){
	return Branches.find()
});



Meteor.publish('thisUserBranch',function(user){
	return Branches.find({storeID:user})
});

Meteor.publish('branchForPromoCode',function(){
	return	Branches.find()
});



	