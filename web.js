var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var fs = require('fs');
	//read from file
	var myBuff = fs.readFileSync("index.html");
	
	//write buffer to screen
	response.send(myBuff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
