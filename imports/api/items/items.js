Items = new Mongo.Collection('items');



Items.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    desc: {
      type: String
    },
    photo : {
      type : String
    },
    branchId:{
        type:String
    }
  })
);



Items.allow({
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

export default Items;
