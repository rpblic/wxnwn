var mysql      = require('mysql');
var mysqlId = require('../config/dbconfig').dbId();
var mysqlPassword = require('../config/dbconfig').dbPassword();
var mysqlLocalhost = require('../config/dbconfig').dbLocalhost();
var mysqlPort = require('../config/dbconfig').mysqlPort();
var mysqlDBname = require('../config/dbconfig').dbDBname();

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