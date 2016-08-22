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
      promotion = this.bodyParams.promotion 
     branches = Branches.find().fetch()
     count = Branches.find().count()
     nth = Math.floor(Math.random() * count);
   
    promotionCode = PromoCodes.insert({
                      createdAt:new Date(),
                      branchID:branches[nth]._id,
                      promotion:promotion,
                      createdBy:user
                    })
      promoCode = PromoCodes.findOne({_id:promotionCode})
      store = Meteor.users.findOne({_id:promoCode.branch.storeID},
         {fields:{"profile.mapLimit":1,"profile.extraProbability":1}});
      promoCode.store=store

      return  promoCode
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
