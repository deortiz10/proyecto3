import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    const express = require('express');
    const morgan = require('morgan');
    const path = require('path');
    const flickr = require("flickrapi");
    const fs = require("fs");
    const cors = require('cors');
    const app = express();

    const mongoose = require('mongoose');
    const schema = mongoose.Schema;
    const MongoClient = require('mongodb').MongoClient
        , assert = require('assert');
    const walmart = require('walmart')('nw8qw3u8ja5qhtzwkz4ex9ws');


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

    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
    app.use(express.static(path.resolve(__dirname, '..', 'build')));
    app.use(cors());

//Searches with Walmart
    app.get('/:query', function(req, res)
    {
        walmart.search(req.params["query"]).then(function(data)
        {
            for (var i = 0; i < data.items.length; i++) {
                console.log('- name: ' + data.items[i].name);
                console.log('- price: ' + data.items[i].salePrice);
            }
            res.send(data);
        });
    });

//Searches with Walmart -- Item
    app.get('item/:query', function(req, res)
    {
        walmart.getItem(req.params["query"]).then(function(data)
        {
            console.log('* brand: '+data.product.brand);
            res.send(data);
        });
    });
    module.exports = app;

});
