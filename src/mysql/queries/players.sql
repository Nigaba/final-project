-- Gets the Name & Position for Players in a Specific Season
SELECT p.ID, p.FirstName, p.LastName, ps.Position
FROM People as p LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
WHERE p.Role = 'Player' AND ps.Season = 2022;

-- Gets the Name, Position, & Bio for Players in a Specific Season
SELECT p.ID, p.FirstName, p.LastName, ps.Position, pb.ImageFile, pb.Desc
FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID = pb.PeopleID) LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
WHERE p.Role = 'Player' AND ps.Season = 2022;

-- Gets the Total Stats for Players for all Seasons Played
SELECT p.ID, p.FirstName, p.LastName, SUM(ps.Games) as TotalGames, SUM(ps.Fouls) as TotalFouls,
SUM(ps.Assists) as TotalAssists, SUM(ps.Goals) as TotalGoals, SUM(ps.Saves) as TotalSaves
FROM People as p LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
WHERE p.Role = 'Player'
GROUP BY p.ID;

-- Gets the Average Stats for Players for all Seasons Played
SELECT p.ID, p.FirstName, p.LastName, AVG(ps.Games) as TotalGames, AVG(ps.Fouls) as TotalFouls,
AVG(ps.Assists) as TotalAssists, AVG(ps.Goals) as TotalGoals, AVG(ps.Saves) as TotalSaves
FROM People as p LEFT JOIN PlayerStats as ps ON (p.ID = ps.PeopleID)
WHERE p.Role = 'Player'
GROUP BY p.ID;