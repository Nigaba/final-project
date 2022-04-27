import {Router} from 'express';

const BASE_QUERY = 'WHERE p.Role=\'Player\'';

const playerRoute = (DB_CONN) => {
	const ROUTER = Router();
	ROUTER.use((req, res, next) => {
		console.table(req.query);
		console.table(req.params);
		next();
	});
	// define the home page route
	ROUTER.get('/', (req, res) => {
		/**
		 * Fields:	People.ID, People.Name, People.DOB, People.Height, People.Weight, People.Nationality, PeopleBios.ImageFile,
		 * 			PeopleBios.Desc, PlayerStats.Season, PlayerStats.Position
		 * Filters:	PlayerStats.Season
		 */
		const QUERY = `${BASE_QUERY} AND ps.Season=?`;
		DB_CONN.query(`SELECT p.ID, p.Name, p.DOB, p.Height, p.Weight, p.Nationality, pb.ImageFile, pb.Desc,
		ps.Season, ps.Position, p.Role
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID=pb.PeopleID) LEFT JOIN PlayerStats as ps ON (p.ID=ps.PeopleID)
		${QUERY};`,
		[2022],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	ROUTER.get('/stats', (req, res) => {
		/**
		 * Fields:	PlayerStats.PeopleID, PlayerStats.Season, PlayerStats.Games, PlayerStats.Fouls,
		 * 			PlayerStats.Assists, PlayerStats.Goals, PlayerStats.Saves
		 * Filters:	PlayerStats.Season
		 */
		const QUERY = `${req.query.season ? 'WHERE ps.Season=?' : ''}`;
		DB_CONN.query(`SELECT ps.PeopleID, ps.Season, ps.Games, ps.Fouls, ps.Assists, ps.Goals, ps.Saves FROM PlayerStats as ps ${QUERY};`,
		[req.query.season],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	ROUTER.get('/:pid', (req, res) => {
		/**
		 * Fields:	People.ID, People.Name, People.DOB, People.Height, People.Weight, People.Nationality, PeopleBios.ImageFile,
		 * 			PeopleBios.Desc, PlayerStats.Season, PlayerStats.Position
		 * Filters:	People.ID, PlayerStats.Season
		 */
		const QUERY = `${BASE_QUERY} AND p.ID=? AND ps.Season=?`;
		DB_CONN.query(`SELECT p.ID, p.Name, p.DOB, p.Height, p.Weight, p.Nationality, pb.ImageFile, pb.Desc,
		ps.Season, ps.Position, p.Role
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID=pb.PeopleID) LEFT JOIN PlayerStats as ps ON (p.ID=ps.PeopleID)
		${QUERY};`,
		[req.params.pid, req.query.season ?? 2022],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	ROUTER.get('/:pid/stats', (req, res) => {
		/**
		 * Fields:	PlayerStats.PeopleID, PlayerStats.Season, PlayerStats.Games, PlayerStats.Fouls,
		 * 			PlayerStats.Assists, PlayerStats.Goals, PlayerStats.Saves
		 * Filters:	PlayerStats.ID, PlayerStats.Season
		 */
		const QUERY = `WHERE ps.PeopleID=?${req.query.season ? ' AND ps.Season=?' : ''}`;
		DB_CONN.query(`SELECT ps.Season, ps.Games, ps.Fouls, ps.Assists, ps.Goals, ps.Saves FROM PlayerStats as ps ${QUERY};`,
		[req.params.pid, req.query.season],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	return ROUTER; 
}


export default playerRoute;