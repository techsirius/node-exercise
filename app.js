const express = require('express');
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 10000;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("currentYear", function(input){
	return new Date().getFullYear() + input;
});

app.use(express.static(__dirname + "/public"));

app.use(function(request, response, next){
	response.render("blocker.hbs");
	//next();
});

app.get("/", function(request, response){
	//response.send("Hello There!!!");
	response.send({
		fname : "Atul",
		mname : "Prasad",
		lanme : "Gupta"
	});
});

app.get("/about", function(request, response){
	response.render("about.hbs", {
		title : "About Page",
		headerData : "Just messing with header",
		message : "This is just for test",
		footerData : "Just messing with footer",
	});
});

app.listen(10000, function(){
	console.log(`Running on port ${port}`);
});