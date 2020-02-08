const express = require('express');

const path = require('path');

const app = express();
app.listen(3000);

app.get("/", function(req, res) {
	res.send("Godday Client!");
});

app.use(function(req,res){
	res.sendfile(path.join(__dirname,'public','404.html'));
});
