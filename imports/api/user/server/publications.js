Meteor.publish('thisUser',function(user){
	return Meteor.users.find({_id:user},
	 {fields: {'emails': 1, 'username': 1, 'profile':1}})
});

Meteor.publish('promoCodeOwner',function(owner){
	return Meteor.users.find({_id:owner},
	 {fields: {'emails': 1, 'username': 1, 'profile':1}})
});