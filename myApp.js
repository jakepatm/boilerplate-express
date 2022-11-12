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

function handler (req,res) {
	if(process.env.MESSAGE_STYLE == "uppercase") {
		res.json({"message" : "HELLO JSON"});
	}
	else {
		res.json({"message" : "Hello json"})
	}
	
}

app.get("/json",handler)




































 module.exports = app;
