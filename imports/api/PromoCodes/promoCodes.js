import Branches from '../branches/branches.js'


PromoCodes = new Mongo.Collection('promoCode',{
    transform : function (doc) {
        doc.branch=Branches.findOne({
            _id:doc.branchID   
        })
         doc.owner=Meteor.users.findOne({
                _id:doc.createdBy
             },{fields:{"profile.credit":1}})

        return doc

    }
});




PromoCodes.attachSchema(
    new SimpleSchema({
    createdAt: {
      type: String
    },
    branchID : {
        type:String
    },
    promotion:{
        type:Number,
        decimal:true
    },
    createdBy : {
        type:String
    } 
    
  })
);



PromoCodes.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return false;
    },
    remove: function() {
        return true;
    }
});

export default PromoCodes;
