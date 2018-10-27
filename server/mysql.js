var mysql      = require('mysql');
var mysqlId = require('../routes/config').dbId();
var mysqlPassword = require('../routes/config').dbPassword();
var mysqlLocalhost = require('../routes/config').dbLocalhost();
var mysqlPort = require('../routes/config').mysqlPort();
var mysqlDBname = require('../routes/config').dbDBname();

{/* 
mysqlDB.query('SELECT * from Persons', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
}); 
*/}

module.exports = function() {
    var mysqlDB = mysql.createConnection({
        host     : mysqlLocalhost,
        user     : mysqlId,
        password : mysqlPassword,
        port     : mysqlPort,
        database : mysqlDBname
    });
      
    mysqlDB.connect(function(err) {
        if (err) {
            console.error('Error Occured while Connecting MysqlDB:', err);
            throw err;
        }
        console.log('Successfully Connected MysqlDB with:');
        console.log('  ID: ',mysqlDB.threadId);
        console.log('  Password: ', mysqlPassword);
        console.log('  Host: ',mysqlLocalhost);
        console.log('  Port: ',mysqlPort);
        console.log('  DB Name: ',mysqlDBname);    
        });

    return mysqlDB;
}