import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Comparaciones = new Mongo.Collection('comparaciones');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('comparaciones', function tasksPublication() {
        return Comparaciones.find();
    });
}
Meteor.methods({

    'comparaciones.insert'(Itemid1,name1,des1,price1,Itemid2,name2,des2,price2){

           check(Itemid1, Number);
           check(name1, String);
           check(des1, String);
           check(price1, Number);
           check(Itemid2, Number);
           check(name2, String);
           check(des2, String);
           check(price2, Number);
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Comparaciones.insert({
            Itemid1,
            name1,
            des1,
            price1,
            Itemid2,
            name2,
            des2,
            price2,
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().username,  // username of logged in user
        });






}


});