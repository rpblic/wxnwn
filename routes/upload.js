var express = require('express');
var router = express.Router();

/* GET upload page. */
router.get('/', function(req, res, next) {
    res.render('upload', {});
});

router.get('/get_storage_video', function(req, res, next){
    // get video in storage
});

router.get('/get_storage_image', function(req, res, next){
    // get image in storage
});

router.get('/get_webcam_video', function(req, res, next){
    // get video from webcam
});

// 
router.post('/', function(req, res, next){
    // Upload video.
  res.redirect('/');
});

module.exports = router;
