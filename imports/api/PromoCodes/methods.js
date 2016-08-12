import { Meteor } from 'meteor/meteor';
import PromoCodes from './promoCodes.js'

Meteor.methods({
	createPromoCode :  function (branchID,promotion,user) {
	 	PromoCodes.insert({
				createdAt:new Date(),
				branchID:branchID,
				promotion:promotion,
				createdBy:user
			})
	
	}
});