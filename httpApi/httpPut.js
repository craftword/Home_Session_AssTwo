//Example PUT method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: {
    id: 1,
    title: 'JAVASCRIPT OOP',
    body: 'Javascript is the best subject',
    userId: 1
  }
    headers: { "Content-Type": "application/json" }
};
 
client.put("http://jsonplaceholder.typicode.com/posts/1", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});