import { Meteor } from 'meteor/meteor';

Meteor.methods({
    decUserCredit : function (user) {
        Meteor.users.update({_id:user},{$inc:{ 'profile.credit':-1 }})
    }
})

Meteor.methods({
    incUserCredit : function (user) {
        Meteor.users.update({_id:user},{$inc:{ 'profile.credit':10 }})
    }
})