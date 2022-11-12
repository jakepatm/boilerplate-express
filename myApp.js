//console.log("Hello World");


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
	res.json({"message" : "Hello json"})
}

app.get("/json",handler)




































 module.exports = app;
