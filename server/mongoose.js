var mongoose = require('mongoose');
var mongoId = require('../routes/config').dbId();
var mongoPassword = require('../routes/config').dbPassword();
var mongoLocalhost = require('../routes/config').dbLocalhost();
var mongoPort = require('../routes/config').mongoPort();
var mongoDBname = require('../routes/config').dbDBname();

var util = require('util');


module.exports = function(){
    function connect(id, password, host, port, dbname) {
        var mongoUrl = util.format(
            'mongodb://%s:%s@%s:%s/%s',
            id, password, host, port, dbname
        );
        const connectionOptions = { useNewUrlParser: true };
        mongoose.connect(
            mongoUrl,
            connectionOptions,
            function (err) {
                if (err){
                    console.error('Error Occured while Connecting MongoDB:', err);
                    throw err;
                }
                console.log('Successfully Connected MongoDB with:');
                console.log('  ID: ',id);
                console.log('  Password: ', password);
                console.log('  Host: ',host);
                console.log('  Port: ',port);
                console.log('  DB Name: ',dbname);
            });
        }
    connect(mongoId, mongoPassword, mongoLocalhost, mongoPort, mongoDBname);
    var mongoDB = mongoose.connection;
    mongoDB.on('disconnected', connect);
    require('../routes/schema/todo.js')

    return mongoDB        
}