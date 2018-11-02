exports.jsonUrl = 'public/todo.json';
exports.dbId = function () {
    return 'rpblic';
}
exports.dbPassword = function () {
    return '4yw6rtht426u';
}
exports.dbLocalhost = function () {
    return 'localhost'
}
exports.mongoPort = function() {
    return '27017'
}

exports. mysqlPort = function() {
    return '3306'
}

exports.dbDBname = function () {
    return 'wxnwn'
}

// root server: mongodb://root:4yw6rtht426u@localhost:27017/admin
// wxnwn server: mongodb://rpblic:4yw6rtht426u@localhost:27017/wxnwn

// sudo service mongodb start
// sudo service mongodb status
// mongo --port 27017
// db.auth("id", "password")
// DEBUG=wxnwn:* npm start
