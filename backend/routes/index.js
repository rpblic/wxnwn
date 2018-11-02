var express = require('express');
var router = express.Router();

var projectName = require('../config/projectconfig').projectName();
var projectDescription = require('../config/projectconfig').projectDescription();
var projectAuthor = require('../config/projectconfig').author();

var hasSignedCookies = require('./IO/userIO').hasSignedCookies;
var getSignedCookies = require('./IO/userIO').getSignedCookies;

/* GET home page. */
router.get('/', function(err, req, res, next) {
    if (hasSignedCookies(req)) {
        const userInfo = getSignedCookies(req);
        console.log("User Session: ", userInfo);
        userName = userInfo.name;
    } else {
        console.log("No Session included.");
        userName = "Anonymous"
    }

    res.render('index', {
        projectName: projectName,
        projectDescription: projectDescription,
        projectAuthor: projectAuthor,
        userName: userName,
        greetingVideo: "../public/video/greeting.mp4"
    });
});

module.exports = router;