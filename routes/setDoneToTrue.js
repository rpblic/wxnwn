module.exports = function (element, data) {
    console.log(element)
    for (var i=0; i<data.length; i++) {
        if (data[i].id == element) {
            data[i].done = true;
        }
    }
}
