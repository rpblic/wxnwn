var checkUserAuth = require('../../IO/userIO').userAuthCheck;
var insertUserSession = require('../../IO/userIO').insertUserSession;

exports.get = function(req, res, next){
    res.render('user_login', {});
}

exports.post = function(req, res, next){
    const userInfo = req.body.userInfo;
    const loginInfo = req.body.loginInfo;

    checkUserAuth(userInfo, function (err) {
        if (err) throw err;
    });
    insertUserSession(userInfo, loginInfo, function (err) {
        if (err) throw err;
    });

    res.redirect('/');
}