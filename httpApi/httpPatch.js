

var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: {
    title: 'PYTHON AND NODEJS'
  },
    headers: { "Content-Type": "application/json" }
};
 
client.patch("http://jsonplaceholder.typicode.com/posts/1", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});