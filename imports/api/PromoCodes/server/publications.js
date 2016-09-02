import { Meteor } from 'meteor/meteor';
import '../promoCodes.js'
import Branches from '../../branches/branches.js'
import Api from '../../rest.js'


  Api.addRoute('user/:username', {authRequired: false}, {
    get: function () {
      return Meteor.users.findOne({username:this.urlParams.username},
                                      {fields:{"services":0}})
    },
  });






 Api.addRoute('createPromoCode/:id', {authRequired: false}, {
    post: function () {
      user =this.urlParams.id
      branch = this.bodyParams.branch 
      console.log(branch)
      promotion = 0.10
    
     
  
   
    promotionCode = PromoCodes.insert({
                      createdAt:new Date(),
                      branchID:branch,
                      promotion:promotion,
                      createdBy:user
                    })
      
      
      return  promotionCode
    },
  });


   Api.addRoute('userCreditDec/:id', {authRequired: false}, {
    post: function () {
      user =this.urlParams.id
      Meteor.users.update({_id:user},{$inc:{ 'profile.credit':-1 }})

      return Meteor.users.findOne({_id:user},{fields:{"profile.credit":1}})
    },
  });


Api.addRoute('userCreditInc/:id', {authRequired: false}, {
    post: function () {
      user =this.urlParams.id
      Meteor.users.update({_id:user},{$inc:{ 'profile.credit':10 }})

      return Meteor.users.findOne({_id:user},{fields:{"profile.credit":1}})
    },
  });








Meteor.publishComposite('thisBranchesPromos', function(branch) {
    return {
        find: function() {
            // Find comments for this yell. Note arguments for callback function
            // being used in query.
            return PromoCodes.find({branchID:branch})
            
        },
        children: [
           {
             find: function(promoCode) {
              return Meteor.users.find({_id: promoCode.createdBy},{fields: {
                                    "services":0
                                 }});
            }
           }
        ]
    }
});

Meteor.publishComposite('promoWithBranch', function(user) {
    return {
        find: function() {
            // Find comments for this yell. Note arguments for callback function
            // being used in query.
            return PromoCodes.find({createdBy:user})
            
        },
        children: [
           {
             find: function(promoCode) {
              return Branches.find({ _id: promoCode.branchID });
            }
           }
        ]
    }
});
