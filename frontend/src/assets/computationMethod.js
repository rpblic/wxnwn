exports.gaussianRand = function (n) {
  var rand = 0
  for (var i = 0; i < n; i++) {
    rand += Math.random()
  }
  return rand / n
}
