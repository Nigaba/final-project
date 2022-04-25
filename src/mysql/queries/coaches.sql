-- Gets the Name for Coaches in a Specific Season
SELECT p.ID, p.FirstName, p.LastName
FROM People as p LEFT JOIN CoachStats as cs ON (p.ID = cs.PeopleID)
WHERE p.Role = 'Coach' AND cs.Season = 2022;

-- Gets the Name, & Bio for Coaches in a Specific Season
SELECT p.ID, p.FirstName, p.LastName, pb.ImageFile, pb.Desc
FROM People as p LEFT JOIN PeopleBios as pb ON (p.ID = pb.PeopleID) LEFT JOIN CoachStats as cs ON (p.ID = cs.PeopleID)
WHERE p.Role = 'Coach' AND cs.Season = 2022;

-- Gets the Total Stats for Coaches for all Seasons Played
SELECT p.ID, p.FirstName, p.LastName, SUM(cs.Wins) as TotalWins, SUM(cs.Losses) as TotalLosses, SUM(cs.Ties) as TotalTies
FROM People as p LEFT JOIN CoachStats as cs ON (p.ID = cs.PeopleID)
WHERE p.Role = 'Coach'
GROUP BY p.ID;

-- Gets the Average Stats for Coaches for all Seasons Played
SELECT p.ID, p.FirstName, p.LastName, AVG(cs.Wins) as TotalWins, AVG(cs.Losses) as TotalLosses, AVG(cs.Ties) as TotalTies
FROM People as p LEFT JOIN CoachStats as cs ON (p.ID = cs.PeopleID)
WHERE p.Role = 'Coach'
GROUP BY p.ID;