var events = require('events');
var userEventEmitter = new events.EventEmitter();

exports.userAuthCheck = function (userInfo) {
    console.log(userInfo);
    return;
}