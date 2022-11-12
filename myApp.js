console.log("Hello World");


let express = require('express');
let app = express();

function x (req,res) {
	res.send("Hello Express");
}

app.get("/", x);




































 module.exports = app;
