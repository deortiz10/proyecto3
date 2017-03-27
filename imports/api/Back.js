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
const url = 'mongodb://admin:admin@ds119380.mlab.com:19380/pickdb';
const esquema = new schema({
    Objeto1:  String,
    marca1: String,
    Objeto2:  String,
    marca2: String,
    selected:   String,
    comments: [{ content: String, date: Date }],
    date: { type: Date, default: Date.now }
});
//app.use(cors());
Meteor.methods({
    'comentarios.buscar': function(query)
    {
        walmart.search(query).then(function(data)
        {
            for (var i = 0; i < data.items.length; i++) {
                console.log('- name: ' + data.items[i].name);
                console.log('- price: ' + data.items[i].salePrice);
            }
            res.send(data);
        });
    }
})
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



