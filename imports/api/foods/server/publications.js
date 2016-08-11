import { Meteor } from 'meteor/meteor';
import '../foods.js'
import Cookers from '../../cookers/cookers.js'

Meteor.publish("allFoods",function(queryType,activeCooker,foodType){
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
