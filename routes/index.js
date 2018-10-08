var express = require('express');
var router = express.Router();
var dataIO = require('./dataIO.js');
// var setDoneToTrue = require('./setDoneToTrue.js');
// var dbpath = require('./dbpath.js').jsonUrl;
var mongoUrl = require('./config.js').mongoUrl();
var todo = require('./schema/todo.js');

/*
* MongoDB Connection 
var MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID;
var assert = require('assert');

MongoClient.connect(mongoUrl, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to MongoDB.");

    client.close();
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
    todo.find({}, function (err, docs) {
        if (err) throw err;
        console.log(docs);
        res.render('index',{
            title: 'Express',
            todo: docs
        });
    });
    /*
    MongoClient.connect(mongoUrl, function (err, client) {
        dataIO.readData(client, function (err, data) {
            assert.equal(err, null);
            client.close();
            res.render('index', {
                title: 'Express',
                todo: data
            });
        });
    });
    */
});

router.post('/task-register', function(req, res) {
    // var task = [];
    var date = new Date(req.body.date);
    var newTask = req.body.task;
    // var genId = new Date().getTime();
    var obj = {"date":date, "task":newTask, "done":false};

    console.log(date)
    console.log(newTask)

    var task= new todo(obj);
    task.save(function (err) {
        if (err) throw err;
        res.redirect('/');
    });

    /* MongoDB Implement
    MongoClient.connect(mongoUrl, function (err, client) {
        dataIO.writeData(client, obj, function (err, result) {
            assert.equal(null, err);
            assert.equal(1, result.insertedCount);

            client.close();
            res.redirect('/');
        });
    });
    */

    /*
    dataIO.readData(dbpath, function (err, data) {
        if (err) throw err;
        if (data!=''){
            task = JSON.parse(data)
        }
        task.push(obj);
        dataIO.writeData(dbpath, task, 'Saved in todo.json.');
    });
    */
});

router.post('/task-done', function(req, res) {
    var checked= req.body.checked;
    /*
    dataIO.readData(dbpath, function (err, data) {
        if (err) throw err;
        if (Array.isArray(checked)) {
            console.log(checked)
            for (var i in checked) {
                setDoneToTrue(checked[i], data);
            }
            dataIO.writeData(dbpath, data, 'Checked '+ checked.length + ' Todo to Done.');
        } else {
            setDoneToTrue(checked, data);
            dataIO.writeData(dbpath, data, 'Checked 1 Todo to Done');
        }
    });
    */
    var objectId = [];
    if (Array.isArray(checked)) {
        for (var i in checked) {
            objectId.push(checked[i]);
        }
    } else {
        objectId.push(checked);
    }

    todo.update({'_id': {$in:objectId}}, {$set:{'done': true}},
                {multi: true}, function (err) {
                    if (err) throw err;
                    res.redirect('/');
                });
    /* MongoDB Implement
    MongoClient.connect(mongoUrl, function (err, client) {
        var collection = client.db().collection('testCollection');
        collection.updateMany(
            {'_id': {$in:objectId}},
            {$set:{'done':true}},
            function (err) {
                assert.equal(null, err);
                client.close();
                res.redirect('/');
        });
    });
    */
});

router.post('/task-undone', function(req, res) {
    var checked= req.body.checked;
    
    var objectId = [];
    if (Array.isArray(checked)) {
        for (var i in checked) {
            objectId.push(checked[i]);
        }
    } else {
        objectId.push(checked);
    }

    todo.update({'_id': {$in:objectId}}, {$set:{'done': false}},
                {multi: true}, function (err) {
                    if (err) throw err;
                    res.redirect('/');
                });
});

module.exports = router;