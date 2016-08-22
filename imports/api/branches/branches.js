/*

Branches = new Mongo.Collection('branches',{
    transform : function (doc) {
     
         doc.store=Meteor.users.findOne({
                _id:doc.storeID
             },{fields:{"profile.mapLimit":1,"profile.extraProbability":1}})

        return doc

    }
});
*/


Branches = new Mongo.Collection('branches')


import LocatonSchema from '../LocationSchema.js'

Branches.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    city: {
      type: String
    },
    country:{
      type:String
    },
    loc: {
      type: LocationSchema
    },
    storeID :{
        type:String
    }
  })
);



Branches.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

export default Branches;


