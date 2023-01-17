const fs = require('fs')

const hbs = require("hbs");
hbs.registerPartials(`${__dirname}/views/partials`);
const express = require('express');
const app = express();

const http = require('http');

http.createServer(app).listen(80);

let browning = require('./res/browning.json')
app.get("/browning", (req, res) => {
		res.render("browning.hbs", browning)
	})
app.render(
	"github-browning.hbs",
	browning,
	(err, str) => {
		if (err) {
			throw err;
		}
		fs.writeFile("index.html", str, (err) => {
				if (err) {
					console.error(err);
				}
			}
		);
	}
);



app.use("/css", express.static(`${__dirname}/css`));
app.use("/src", express.static(`${__dirname}/src`));
app.use("/client", express.static(`${__dirname}/client`));


app.use('/res/:path/:scen/*', function(req,res){
	let path = `/res/${req.params.path}`
	let scen = `${req.params.scen}/${req.params['0']}`;
	let params = `${__dirname}${path}/${scen}`
	let stats = fs.statSync(params)
	if(stats.isFile()){
		fs.readFile(`${params}`, (err, file) => {
			res.send(file)
		});
	}else{
		fs.readdir(`${params}`, (err, files) => {
			console.log(files)
			res.send({files})
		});
	}
})


