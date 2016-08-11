import { Meteor } from 'meteor/meteor';
import Foods from './foods.js'

Meteor.methods({
	addFood :  function (foodName,desc,photo,cooker,foodDay,foodType) {
		Foods.insert({
			foodName:foodName,
			foodDesc:desc,
			photo:photo,
			cookerId:cooker,
			foodDay:foodDay,
			foodType:foodType
		})
	}
});