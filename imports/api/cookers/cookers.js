Cookers = new Mongo.Collection('cookers');

Cookers.attachSchema(
    new SimpleSchema({
    fullName: {
      type: String
    },
    inf: {
      type: String
    },
    photo:{
      type:String
    }
  })
);



Cookers.allow({
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

export default Cookers;
