// var fs = require('fs');

/*
exports.readData = function (path, fn) {
    fs.readFile(path, function (err, data){
        if (data==(''||null)) {
            fn(err, data);
        } else {
            fn(err, JSON.parse(data));
        }
    });
}
*/

exports.readData = function (client, callback) {
    var collection = client.db().collection('testCollection');
    collection.find({}).toArray(function (err, result) {
        callback(err, result);
    })
}

/*
exports.writeData = function (path, data, logs) {
    fs.writeFile(path, JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log(logs);
    })
}
*/

exports.writeData = function (client, data, callback) {
    var collection = client.db().collection('testCollection');
    collection.insertOne(data, function (err, result) {
        callback(err, result);
    });
}
