const hbs = require("hbs");
const express = require('express');
const app = express();

const http = require('http');

http.createServer(app).listen(80);

app.get("/",
	(req, res) => {
		res.render("browning.hbs",{})
	})
