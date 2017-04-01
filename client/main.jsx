import React from 'react';
// Recuerden hacer las correcciones con ESlint { Sample } con los espaciones despues y antes de los corchetes
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import Image from '../imports/ui/image.jsx';
import './main.css';
import { mount } from 'react-mounter';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        mount(App);
    }
});

Meteor.startup(() => {

});
