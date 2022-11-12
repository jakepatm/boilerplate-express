//console.log("Hello World");
require('dotenv').config();

let express = require('express');
let app = express();

/*let absPath = __dirname + "/views/index.html"
let assetPath = __dirname + "/public"

function handler (req,res) {
	//res.send("Hello Express");
	res.sendFile(absPath)
}

app.get("/", handler);
app.use("/public",express.static(assetPath)) */

let absPath = __dirname + "/json";

function handler2 (req,res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
}

function handler1 (req,res) {
	/*if(process.env.MESSAGE_STYLE == "uppercase") {
		res.json({"message" : "HELLO JSON"});
	}
	else {
		res.json({"message" : "Hello json"});
	}*/
	res.json({"message": "Hello json"});
	
	
}
app.use(handler2);
app.get("/json",handler1);




































 module.exports = app;
