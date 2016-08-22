import { Meteor } from 'meteor/meteor';
import Branches from './branches.js'

Meteor.methods({
	addBranch :  function (name,city,storeID,lat,lng) {
		Branches.insert({
			name:name,
			city:city,
			country:'Netherlands',
			storeID:storeID,
			  loc: {
                type: "Point",
                coordinates : [lat,lng]
            }
		})
	}
});

