//console.log("Hello World");
require('dotenv').config();

let express = require('express');
let app = express();

/*

Query Parameters

*/

app.get("/name", function (req,res) {
	res.json({"name" : req.query.first + " " + req.query.last})
})


/*

ROUTE PARAMETERS

app.get('/:word/echo',function (req,res) {
	res.json({"echo" : req.params.word});
})
*/


/* LESSON BEFORE Route Parameters


let absPath = __dirname + "/views/index.html"
let assetPath = __dirname + "/public"

function handler (req,res) {
	//res.send("Hello Express");
	res.sendFile(absPath)
}

app.get("/", handler);
app.use("/public",express.static(assetPath)) */

/*let absPath = __dirname + "/json";

function handler2 (req,res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
}

function handler1 (req,res,next) {
	/*if(process.env.MESSAGE_STYLE == "uppercase") {
		res.json({"message" : "HELLO JSON"});
	}
	else {
		res.json({"message" : "Hello json"});
	}
	let nowDate = new Date().toString();
	req.time = nowDate;
	next();
	
}
app.use(handler2);
app.get("/now",handler1, function(req,res) {
	res.json({"time": req.time})
});*/







































 module.exports = app;
