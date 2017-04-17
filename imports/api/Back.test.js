import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Comentarios } from './Back.js';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('Comentarios', () => {
        describe('methods', () => {
            const userId = Random.id();
            let comentarioId;
            beforeEach(() => {
                Comentarios.remove({});
                comentarioId= Comentarios.insert({
                    comentar:'test',
                    owner: userId,           // _id of logged in user
                    username: 'tmeasday',  // username of logged in user
                })
            });

            it('add comentario to user', () => {

                assert.equal(Comentarios.find().count(), 1);
            });
        });
    });
}