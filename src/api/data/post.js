import {Router} from 'express';

const postRoute = (DB_CONN) => {
	const ROUTER = Router();
	ROUTER.use((req, res, next) => {
		console.table(req.query);
		console.table(req.params);
		next();
	});
	// define the home page route
	ROUTER.get('/', (req, res) => {
		/**
		 * Fields:	Posts.ID, Posts.Title, Posts.Body
		 * Filters:
		 */
		DB_CONN.query(`SELECT p.ID, p.Title, p.Body FROM Posts as p;`,
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	ROUTER.get('/:pid', (req, res) => {
		/**
		 * Fields:	Posts.ID, Posts.Title, Posts.Body
		 * Filters:	Posts.ID
		 */
		DB_CONN.query(`SELECT p.ID, p.Title, p.Body FROM Posts as p WHERE p.ID = ?;`,
		[req.params.pid],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	return ROUTER; 
}

export default postRoute;