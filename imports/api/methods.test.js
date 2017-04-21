import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Comparaciones } from './comparaciones.js';
import { assert } from 'meteor/practicalmeteor:chai';
import './methods.js';

if (Meteor.isServer) {
    describe('Methods apis', () => {
        describe('methods', () => {
            const TestInput = 'Iphone';


            it('call api and fill array with products', () => {
            var arr=  Meteor.call('walmart.search', );
            var length= arr.length;
                assert.isAtLeast(length, 1, 'Debe tener 1 o mas resultados');
                assert.equal(Comparaciones.find().count(), 1);
            });
        });
    });
}
