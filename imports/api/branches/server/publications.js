import { Meteor } from 'meteor/meteor';
import '../branches.js'
import Api from '../../rest.js'


  Api.addRoute('branches/:storeID/:limit', {authRequired: false}, {
    get: function () {
      
    return  Branches.find({
    	storeID:this.urlParams.storeID},
         {
         	fields:{"services":0}, 
         	limit:this.urlParams.limit 
         }
       )

    }
  });




Meteor.publish('branchesCount',function(user){
	return Branches.find()
});



Meteor.publish('thisUserBranch',function(user){
	return Branches.find({storeID:user})
});

Meteor.publish('branchForPromoCode',function(){
	return	Branches.find()
});



	