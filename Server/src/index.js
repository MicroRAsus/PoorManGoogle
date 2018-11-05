const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Serve static files
app.use('/static', express.static('./Client/public'));

//Query api
app.post('/api/query', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	exec(`./Server/bin/query '${req.body.q}'`, (err, stdout, stderr) => { //no need to be sanitized as it's wrapped around single quotes
		if (err) {//error occured executing query binary
    		res.status(500).send({ });
			return;
  		}
		res.status(200).json(JSON.parse(stdout));
	});
});

//The "catchall" handler: for any request that doesn't routes above
app.get('*', (req, res) => {
	res.status(404).send("404! Page not found!" + `${process.env.PORT}`)
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Poor mans Google search engine (Express) is listening on port ${port}`);
