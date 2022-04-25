function playerRoute(DB_CONN) {
	return (req, res) => {
		/**
		 * Fields: People.FirstName, People.LastName, PlayerStats.Position, PeopleBios.ImageFile, PeopleBios.Desc
		 * Filters: People.Role = Player, PlayerStats.Season = $CurrentSeason
		 */
		DB_CONN.query(`SELECT p.ID, p.FirstName, p.LastName, ps.Position, pb.ImageFile, pb.Desc
		FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID = pb.PeopleID) LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
		WHERE p.Role = 'Player' AND ps.Season = ?;`,
		[2022],
		(err, dbRes, fields) => {
			// console.table(dbRes);
			res.json(dbRes);
		});
	}
}


export default playerRoute;