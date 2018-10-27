var express = require('express');
var router = express.Router();

var getUserSession = require('../IO/userIO').getUserSession;
var setStreamServer = require('../IO/streamIO').setStreamServer;
var getCurrentStreamServer = require('../IO/streamIO').getCurrentStreamServer;
var getCurrentVideoInfo = require('../IO/stateIO').getCurrentVideoInfo;

/* GET channelview page. */
router.get('/:channel', function(req, res, next) {
    const userSession = getUserSession();
    var channel = req.params.channel;
    var streamServer = setStreamServer(channel);
    streamServer.setChannel(channel, userSession);
    streamServer.pipe();

    res.render('channelview', {
        userInfo: userSession,
        channelInfo: channel,
        channelTrack: streamServer
    });
});

router.get('/insertchannel/:channelid', function(req, res, next){
    var channelid = req.params.channelid;
    streamServer = getCurrentStreamServer();
    streamServer.insertChannel(channelid);
});

router.get('/deletechannel/:channelid', function(req, res, next){
    var channelid = req.params.channelid;
    streamServer = getCurrentStreamServer();
    streamServer.deleteChannel(channelid);    
});

router.get('/likevideo', function(req, res, next){
    var currentVideoInfo = getCurrentVideoInfo();
    console.log("like video", currentVideoInfo.name, "with playtime", currentVideoInfo.playtime);
});

router.get('/downvotevideo', function(req, res, next){
    var currentVideoInfo = getCurrentVideoInfo();
    console.log("downvote video", currentVideoInfo.name, "with playtime", currentVideoInfo.playtime);
});