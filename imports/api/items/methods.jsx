import { Meteor } from 'meteor/meteor';
import Items from './items.js'

Meteor.methods({
	addItem:function(name,quantity,photo,branchId,clothesType,additionalDiscount){
		Items.insert({
			name:name,
			date:new Date(),
			quantity:quantity,
			photo:photo,
			branchId:branchId,
			clothesType:clothesType,
			additionalDiscount:additionalDiscount
			
		})
	},
	sellItem:function(itemId){
		 Items.update({ _id: itemId }, { $inc: {quantity: -1} });
	}
})