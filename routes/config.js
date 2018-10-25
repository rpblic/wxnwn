exports.jsonUrl = 'public/todo.json';
exports.mongoId = function () {
    return 'rpblic';
}
exports.mongoPassword = function () {
    return '4yw6rtht426u';
}
exports.mongoLocalhost = function () {
    return 'localhost'
}
exports.mongoPort = function() {
    return '27017'
}
exports.mongoDBname = function () {
    return 'wxnwn'
}

// root server: mongodb://root:4yw6rtht426u@localhost:27017/admin
// wxnwn server: mongodb://rpblic:4yw6rtht426u@localhost:27017/wxnwn

// sudo service mongodb start
// sudo service mongodb status
// mongo --port 27017
// db.auth("id", "password")
// DEBUG=wxnwn:* node ./bin/www
