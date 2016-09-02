import { Meteor } from 'meteor/meteor';
import '../branches.js'
import Api from '../../rest.js'


  Api.addRoute('branches/:storeID/', {authRequired: false}, {
    get: function () {
      
   
      store = Meteor.users.findOne({_id:this.urlParams.storeID},
         {fields:{"profile.mapLimit":1,"profile.extraProbability":1}});
      console.log(store)
     

   return  Branches.find({storeID:this.urlParams.storeID},
                       {
                       	fields:{"services":0}, 
                       	limit:store.profile.mapLimit
                       }).fetch()

    }
  });



  Api.addRoute('branches', {authRequired: false}, {
    get: function () {
   return  Branches.find().fetch()

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



	