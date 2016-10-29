import { Meteor } from 'meteor/meteor';
import Items from './items.js'

Meteor.methods({
	addItem:function(adress){
		Items.insert({
			adress:adress,
			date:new Date()
			
			
		})
	}
})