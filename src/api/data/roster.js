import {Router} from 'express';

const rosterRoute = (DB_CONN) => {
	const ROUTER = Router();
	ROUTER.use((req, res, next) => {
		console.table(req.query);
		console.table(req.params);
		next();
	});
	// define the home page route
	ROUTER.get('/', (req, res) => {
		/**
		 * Fields:	People.ID, People.FirstName, People.LastName, People.DOB, People.Height, People.Weight,
		 * 			People.Nationality, PeopleBios.ImageFile, PeopleBios.Desc, People.Role
		 * Filters: People.Role, *.Season
		 */
		const QUERY = `${req.query.role ? `p.Role=?${req.query.season ? ' AND s.Season=?':''}`:'TRUE'}`;
		const JOIN = `${req.query.role&&req.query.season ? `LEFT JOIN ${req.query.role}Stats as s ON (p.ID = s.PeopleID)`: ''}`;
		DB_CONN.query(`SELECT p.ID, p.FirstName, p.LastName, p.DOB, p.Height, p.Weight, p.Nationality, pb.ImageFile, pb.Desc, p.Role
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID = pb.PeopleID) ${JOIN} WHERE ${QUERY};`,
		[req.query.role, req.query.season ?? 2022],
		(err, dbRes, fields) => {
			res.json(dbRes);
		});
	});
	ROUTER.get('/:pid', (req, res) => {
		/**
		 * Fields: People.FirstName, People.LastName, PlayerStats.Position, PeopleBios.ImageFile, PeopleBios.Desc
		 * Filters: People.Role = Player, PlayerStats.Season = $CurrentSeason
		 * , PlayerStats.Position, PlayerStats.Games, PlayerStats.Fouls, PlayerStats.Assists,
		 * PlayerStats.Goals, PlayerStats.Saves
		 */
		const JOIN = `${req.query.role&&req.query.season ? `LEFT JOIN ${req.query.role}Stats as s ON (p.ID = s.PeopleID)`: ''}`;
		DB_CONN.query(`SELECT *	FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID = pb.PeopleID) LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
		WHERE p.ID = ?;`,
		[req.params.pid],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	});
	return ROUTER;
}




export default rosterRoute;