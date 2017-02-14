var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// direct way 
client.get("http://jsonplaceholder.typicode.com/posts/1", function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});