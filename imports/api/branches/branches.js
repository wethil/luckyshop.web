Branches = new Mongo.Collection('branches');

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
