import express from 'express';
import { createConnection } from 'mysql2';

import playerRoute from './data/players.js';
import coachRoute from './data/coaches.js';
// enable CORS without external module
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

const DB_CONN = await createConnection({
	host: 'mysql-db',
	database: 'final_project',
	user: 'root',
	password: 'admin1234'
});

const app = express();

app.get('/', (req, res) => {
	// res.writeHead(200/*, {'Content-Type': 'text/plain'}*/);
	res.send('Hello API!');
});
app.get('/players', playerRoute(DB_CONN));
app.get('/coaches', coachRoute(DB_CONN));

app.listen(8080);
