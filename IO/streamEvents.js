var util = require('util');
var EventEmitter = require('events');

function ChannelEventEmitter () {
    EventEmitter.call(this);
}
util.inherits(ChannelEventEmitter, EventEmitter);

var channelEE = new ChannelEventEmitter();

channelEE.on('insert', function(channel, channelList){
    // Insert channel in channelList
    console.log("Inserted Channel %s in current channel list.", channel);
});

channelEE.on('delete', function(channel, channelList){
    // Delete channel in channelList
    console.log("Deleted Channel %s in current channel list.", channel);
});

channelEE.on('priortize', function(channel, channelList){
    // Priortize channel in channelList
    console.log("Priortized Channel %s in current channel.", channel);
});

channelEE.on('bookmark', function(channel, user){
    // Bookmark channel in user's list
    console.log("Added Channel %s in user %s's Bookmark List.", channel, user);
});

function VideoEventEmitter () {
    EventEmitter.call(this);
}
util.inherits(VideoEventEmitter, EventEmitter);

var videoEE = new VideoEventEmitter();

videoEE.on('play_stop', function(video){
    if (videoPlayState) {
        // Stop video in custom video player
        console.log("Stopped Video.")
    } else {
        // Play video in custom video player
        console.log("Played Video.")
    }  
});

videoEE.on('play_next', function(video, stream){
    // Play next video.
    console.log("Played Next Video %s", video);
});

videoEE.on('like', function(video, user){
    // Add Like interaction from user to video
    console.log("Liked Video %s", video);
});

videoEE.on('like', function(video, user){
    // Add Like interaction from user to video
    console.log("Liked Video %s", video);
});

videoEE.on('downvote', function(video, user){
    // Add Downvote interaction from user to video
    console.log("Downvoted Video %s", video);
});

exports.channelEE = channelEE;
exports.vieoEE = videoEE;