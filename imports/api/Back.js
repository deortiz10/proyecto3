/**
 * Created by usuario on 25/03/2017.
 */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
//import { express} from 'express';
import { check } from 'meteor/check';

export const Comentarios = new Mongo.Collection('comments');


//var app = express();
const morgan = require('morgan');
const path = require('path');

const fs = require("fs");
const cors = require('cors');


const mongoose = require('mongoose');
const schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
const walmart = require('walmart')('nw8qw3u8ja5qhtzwkz4ex9ws');
var connectHandler = WebApp.connectHandlers ;


//WebApp.connectHandlers.use(function (req, res, next) {
  //  res.setHeader("Access-Control-Allow-Origin", "*");
    //return next();

//})
//deberían también dejar esto como variable de entorno, con esta url me puedo conectar y hacer cambios en la base de datos, asi como cualquiera que vea su repositorio, que es público

const url = 'mongodb://admin:admin@ds119380.mlab.com:19380/pickdb';

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('comments', function tasksPublication() {
        return Comentarios.find();
    });
}
Meteor.methods({

    'comments.insert'(comentar){


        check(comentar, String);

        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Comentarios.insert({
           comentar,
            owner: Meteor.userId(),           // _id of logged in user
            username: Meteor.user().username,  // username of logged in user
        });






    }


});
function getComparaciones(query) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to Mongo");
        var comparaciones = db.collection("comparaciones");
        console.log(comparaciones);

        comparaciones.find(query).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            //callback(docs);

            db.close();
        });
    });
}
