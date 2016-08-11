import { Meteor } from 'meteor/meteor';
import Cookers from './cookers.js'

Meteor.methods({
	addCooker :  function (fullName,inf,photo) {
		Cookers.insert({
			fullName:fullName,
			inf:inf,
			photo:photo
		})
	}
});