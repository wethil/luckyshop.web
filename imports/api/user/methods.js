import { Meteor } from 'meteor/meteor';

Meteor.methods({
    decUserCredit : function (user) {
        Meteor.users.update({_id:user},{$inc:{ 'profile.credit':-1 }})
    },
    incUserCredit : function (user) {
        Meteor.users.update({_id:user},{$inc:{ 'profile.credit':10 }})
    }
})


Meteor.methods({
    changeStoreMapLimit : function (user,limit) {
        Meteor.users.update({_id:user},{$set:{ 'profile.mapLimit':limit }})
    }
})