const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

//Query api
app.post('/api/query', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	exec(`./server/bin/query '${req.body.q}'`, (err, stdout, stderr) => { //no need to be sanitized as it's wrapped around single quotes
		if (err) {//error occured executing query binary
    		res.status(500).send({ });
			return;
  		}
		res.status(200).json(JSON.parse(stdout));
	});
});

//The "catchall" handler: for any request that doesn't routes above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Poor mans Google search engine (Express) is listening on port ${port}`);
