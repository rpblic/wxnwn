var express = require('express');
var router = express.Router();

var checkUserAuth = require('./IO/userIO').userAuthCheck;
var insertUserSession = require('./IO/userIO').insertUserSession;

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('user')
});

router.post('/userlogin/:id', function(req, res, next){
  const userInfo = req.body.userInfo;
  const loginInfo = req.body.loginInfo;

  checkUserAuth(userInfo, function (err) {
    if (err) throw err;
  });
  insertUserSession(userInfo, loginInfo, function (err) {
    if (err) throw err;
  });

  res.redirect('/');
});

module.exports = router;
