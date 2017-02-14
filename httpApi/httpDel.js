var Client = require('node-rest-client').Client;

var client = new Client();

var args ={headers:{"Content-Type": "application/json"}};

client.delete('http://jsonplaceholder.typicode.com/posts/1',args, function(data, response) { "..." });