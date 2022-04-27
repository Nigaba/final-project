import express from 'express';
import { createConnection } from 'mysql2';

import playerRoute from './data/player.js';
import coachRoute from './data/coach.js';
import rosterRoute from './data/roster.js';
import postRoute from './data/post.js';

const DB_CONN = await createConnection({
	host: 'mysql-db',
	database: 'final_project',
	user: 'root',
	password: 'admin1234'
});

const app = express();
// enable CORS without external module
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', (req, res) => {
	// res.writeHead(200/*, {'Content-Type': 'text/plain'}*/);
	res.send('Hello API!');
});
app.use('/player', playerRoute(DB_CONN));
app.use('/coach', coachRoute(DB_CONN));
app.use('/post', postRoute(DB_CONN));
app.use('/roster', rosterRoute(DB_CONN));

app.listen(8080);
