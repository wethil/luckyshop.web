Items = new Mongo.Collection('items');



Items.attachSchema(
    new SimpleSchema({
    name: {
      type: String
    },
    quantity: {
      type: Number
    },
    photo : {
      type : String
    },
    branchId:{
        type:String
    },
    clothesType:{
        type:String,
    },
    additionalDiscount:{
        type:Number,
        optional:true
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
