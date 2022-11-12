//console.log("Hello World");


let express = require('express');
let app = express();

let absPath = __dirname + "/views/index.html"

function x (req,res) {
	//res.send("Hello Express");
	res.sendFile(absPath)
}

app.get("/", x);




































 module.exports = app;
