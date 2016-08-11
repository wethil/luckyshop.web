import { Meteor } from 'meteor/meteor';
import '../cookers.js'


Meteor.publish('allCookers',function(){
	return Cookers.find()
});


Meteor.publish('thisUser',function(user){
	return Meteor.users.find({_id:user}, {fields: {'emails': 1, 'username': 1, 'profile':1}})
});