//Example POST method invocation 
var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// set content-type header and data as json in args parameter 
var args = {
    data: {
    title: 'THE BIBLE',
    body: 'MOST READ BOOK IN WORLD',
    userId: 1
  },
    headers: { "Content-Type": "application/json" }
};
 
client.post("http://jsonplaceholder.typicode.com/posts", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});