var static = require('node-static');
 
var file = new static.Server('./src/');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(5500), function() {
    console.log("inside")
};