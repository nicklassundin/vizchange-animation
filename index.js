const fs = require('fs')

const hbs = require("hbs");
hbs.registerPartials(`${__dirname}/views/partials`);
const express = require('express');
const app = express();

const http = require('http');

http.createServer(app).listen(80);

let browning = require('./res/browning.js')
app.get("/browning", (req, res) => {
		res.render("browning.hbs", browning)
	})
app.get("/browning-immersive", (req, res) => {
	res.render("browning.hbs", {
		acts: [browning.acts.immersion],
		actsID: ['immersion']
	})
})
app.get("/browning-discovery", (req, res) => {
	res.render("browning.hbs", {
		acts: [browning.acts.discovery],
		actsID: ['discovery'],
	})
})

app.get("/browning-fishes", (req, res) => {
	res.render("browning.hbs", {
		acts: [browning.acts.fishes],
		actsID: ['fishes'],
	})
})
app.get("/browning-evidence", (req, res) => {
	res.render("browning.hbs", {
		acts: [browning.acts.evidence],
		actsID: ['evidence'],
	})
})



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
			//console.log(files)
			res.send({files})
		});
	}
})

// TODO github optimization

app.render("browning-github.hbs", {
	acts: [browning.acts.immersion],
	actsID: ['immersion']
}, (err, str) => {
	if (err) {
		throw err;
	}
	fs.writeFile("browning-immersive.html", str, (err) => {
			if (err) {
				console.error(err);
			}
		}
	);
})
app.render("browning-github.hbs", {
	acts: [browning.acts.discovery],
	actsID: ['discovery'],
}, (err, str) => {
	if (err) {
		throw err;
	}
	fs.writeFile("browning-discovery.html", str, (err) => {
			if (err) {
				console.error(err);
			}
		}
	);
})
app.render("browning-github.hbs", {
	acts: [browning.acts.fishes],
	actsID: ['fishes'],
},  (err, str) => {
	if (err) {
		throw err;
	}
	fs.writeFile("browning-fishes.html", str, (err) => {
			if (err) {
				console.error(err);
			}
		}
	);
})

app.render("browning-github.hbs", {
	acts: [browning.acts.evidence],
	actsID: ['evidence'],
},  (err, str) => {
	if (err) {
		throw err;
	}
	fs.writeFile("browning-evidence.html", str, (err) => {
			if (err) {
				console.error(err);
			}
		}
	);
})


/*
app.render(
	"browning-github.hbs",
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

 */

app.get("/browning-menu", (req, res) => {
	res.render("browning.hbs", {
		acts: [browning.acts.menu],
		actsID: ['menu'],
	})
})
app.render("browning-github.hbs", {
	acts: [browning.acts.menu],
	actsID: ['menu'],
},  (err, str) => {
	if (err) {
		throw err;
	}
	fs.writeFile("browning-menu.html", str, (err) => {
			if (err) {
				console.error(err);
			}
		}
	);
})