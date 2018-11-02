var express = require('express');
var router = express.Router();

var userLogin = require('./login');
var userStack = require('./stack');
var userProperty = require('./property');

router.get('/login', userLogin.get);
router.post('/login', userLogin.post);

router.get('/:id/property', userProperty.get);
router.post('/:id/property', userProperty.post);

router.get('/:id/stack', userStack.get);
router.post('/:id/stack', userStack.post);

module.exports = router;
