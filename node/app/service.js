import {MongoClient, ObjectID} from 'mongodb';
import assert from 'assert';
let db = {};
let connection_string = 'mongodb://username:password@ds123311.mlab.com:23311/newswatcherdb_harnet';

let insert_document = function(db, callback) {
    db.collection('newswatcher').insertOne( {
        property1:"Hi",
        property2:77
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the newswatcher collection.");
        callback();
    });
};


let remove_document = function(db, callback) {
    db.collection('newswatcher').deleteMany( {
        property1:"Hi",
        property2:77
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Removed documents a document into the newswatcher collection.");
        callback();
    });
};

let find_all_documents = function(db,callback){
    "use strict";
    let cursor = db.collection('newswatcher').find();

    cursor.each(function(err,doc){
        assert.equal(err,null);
        if(doc != null){
            console.dir(doc);
        }else{
            callback();
        }
    });
};

let find_one_documents = function(db,callback){
    "use strict";
    let cursor = db.collection('newswatcher').findOne(
        {
            display_name: 'Rickman'

        },function(err,doc){
            if(err)console.log(err);
            else console.log(doc);
        });
};


let find_one_update = function(db,callback){
    "use strict";
    let cursor = db.collection('newswatcher').findOneAndUpdate(
        {display_name: 'c-more'},
        {$set:{display_name:'c-more Butts'}},
        {returnOriginal:false},
        function(err,doc){
            if(err)console.log(err);
            else console.log(doc);
        });
};


