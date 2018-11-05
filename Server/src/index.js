const express = require('express');
//const path = require('path');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static('./Client/files'));

// Put all API endpoints under '/api'
app.post('/api/query', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	exec(`./Server/bin/query '${req.body.q}'`, (err, stdout, stderr) => {
		if (err) {
    		// node couldn't execute the command
    		res.status(500).send({ });
			return;
  		}
		res.status(200).json(JSON.parse(stdout));
	});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
// 	res.sendFile(path.parse('/Client/files'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Express listening on ${port}`);
