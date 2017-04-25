import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import features from './features.jsx';
import Comparacion from "./comparacion";
import './App.jsx'
describe('features', () => {

    beforeEach(() => {
        const userId = Random.id();
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
        this.setUserId(userId);
    });

    it('should render', () => {
  const comp = shallow(<Comparacion comparacion=comparacionId/>);
  //chai.assert(comp.hasClass(comp.hasClass('text historial')));
  //chai.assert(comp.hasClass(comp.hasClass('li')));
    })
})
