import {Router} from 'express';

const BASE_QUERY = 'WHERE p.Role=\'Coach\'';

const coachRoute = (DB_CONN) => {
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
		const QUERY = `${BASE_QUERY} AND cs.Season=?`;
		DB_CONN.query(`SELECT p.ID, p.Name, p.DOB, p.Height, p.Weight, p.Nationality, pb.ImageFile, pb.Desc,
		cs.Season, p.Role
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID=pb.PeopleID) LEFT JOIN CoachStats as cs ON (p.ID=cs.PeopleID)
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
		const QUERY = `${req.query.season ? 'WHERE cs.Season=?' : ''}`;
		DB_CONN.query(`SELECT cs.PeopleID, cs.Season, cs.Wins, cs.Losses, cs.Ties FROM CoachStats as cs ${QUERY};`,
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
		const QUERY = `${BASE_QUERY} AND p.ID=? AND cs.Season=?`;
		DB_CONN.query(`SELECT p.ID, p.Name, p.DOB, p.Height, p.Weight, p.Nationality, pb.ImageFile, pb.Desc,
		cs.Season, p.Role
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID=pb.PeopleID) LEFT JOIN CoachStats as cs ON (p.ID=cs.PeopleID)
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
		const QUERY = `WHERE cs.PeopleID=?${req.query.season ? ' AND cs.Season=?' : ''}`;
		DB_CONN.query(`SELECT cs.Season, cs.Wins, cs.Losses, cs.Ties FROM CoachStats as cs ${QUERY};`,
		[req.params.pid, req.query.season],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	return ROUTER; 
}


export default coachRoute;