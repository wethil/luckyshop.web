import { Meteor } from 'meteor/meteor';
import '../promoCodes.js'
import Branches from '../../branches/branches.js'



/*Meteor.publish("allFoods",function(queryType,activeCooker,foodType){
  switch (queryType) {
    case 0:
          return Foods.find({cookerId:activeCooker})
      break;
    case 1:
          return Foods.find({foodType:foodType})
        
    default:
         return  Foods.find()
  }

})
*/
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
