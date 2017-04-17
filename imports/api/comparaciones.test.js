import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Comparaciones } from './comparaciones.js';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('Comparaciones', () => {
        describe('methods', () => {
            const userId = Random.id();
            let comparacionId;
            beforeEach(() => {
                Comparaciones.remove({});
                comparacionId= Comparaciones.insert({
                    Itemid1: 1,
                    name1: 'producto1',
                    des1: 'descripcion1',
                    price1: 111,
                    Itemid2: 2,
                    name2: 'producto2',
                    des2: 'descipcion2',
                    price2: 222,
                    owner: userId,           // _id of logged in user
                    username: 'tmeasday',  // username of logged in user
                })
            });

            it('add comparacion to user', () => {

                assert.equal(Comparaciones.find().count(), 1);
            });
        });
    });
}