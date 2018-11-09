exports.getPreviousVideoId = function () {
  var previousVideoId = this.channelPreStorylineList.pop()
  return previousVideoId
}
