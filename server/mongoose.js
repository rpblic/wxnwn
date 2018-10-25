var mongoose = require('mongoose');
var mongoId = require('../routes/config').mongoId();
var mongoPassword = require('../routes/config').mongoPassword();
var mongoLocalhost = require('../routes/config').mongoLocalhost();
var mongoPort = require('../routes/config').mongoPort();
var mongoDBname = require('../routes/config').mongoDBname();

var util = require('util');


module.exports = function(){
    function connect(id, password, host, port, dbname) {
        var mongoUrl = util.format(
            'mongodb://%s:%s@%s:%s/%s',
            id, password, host, port, dbname
        );
        const connectionOptions = { useNewUrlParser: true };
        console.log(mongoUrl);
        mongoose.connect(
            mongoUrl,
            connectionOptions,
            function (err) {
                if (err){
                    console.error('Error Occured while Connecting MongoDB:', err);
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
        var db = mongoose.connection;
        db.on('disconnected', connect);
        require('../routes/schema/todo.js')
}