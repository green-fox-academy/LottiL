https://sqlbolt.com/lesson/select_queries_introduction

1
--SELECT Title FROM movies;
--SELECT Director FROM movies;
--SELECT Title, Director FROM movies;
--SELECT Title, Year FROM movies;
--SELECT * FROM movies;

2
--SELECT * FROM movies WHERE Id = 6;
--SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010
--SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010
--SELECT title, year FROM movies WHERE year <= 2003; (nem jó megoldás, de ez van fent...)

3
--SELECT * FROM movies WHERE Title LIKE 'Toy Story%';
--SELECT * FROM movies WHERE Director = 'John Lasseter';
--SELECT Title,Director FROM movies WHERE Director != 'John Lasseter';
SELECT * FROM movies WHERE Title LIKE 'WALL-%'

4
--SELECT DISTINCT Director FROM movies ORDER BY Director ASC;
--SELECT * FROM movies ORDER BY Year DESC LIMIT 4;
--SELECT * FROM movies ORDER BY Title LIMIT 5;
SELECT * FROM movies ORDER BY Title LIMIT 5 OFFSET 5

13
INSERT INTO movies (Title, Director, Year, Length_minutes) VALUES ('Toy Story 4','John Lasseter',2025,80);
INSERT INTO BoxOffice VALUES (15,8.7,340000000,270000000);

14
UPDATE movies
SET director = "John Lasseter"
WHERE id = 2;

UPDATE movies
SET year = 1999
WHERE id = 3;

UPDATE movies
SET title = "Toy Story 3",
director = "Lee Unkrich"
WHERE id = 11;

15
DELETE FROM movies WHERE year < 2005;
DELETE FROM movies WHERE director = 'Andrew Stanton';

16
CREATE TABLE database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);

10
SELECT MAX(years_employed) as Max_years_employed
FROM employees;

SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;

SELECT building, SUM(years_employed) as total_number_of_employee_years
FROM employees
GROUP BY building;

11
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";

SELECT role, COUNT(*) as Number_of_role
FROM employees
GROUP BY role;

SELECT role, SUM(years_employed) as number_of_years_employed
FROM employees
WHERE role= 'Engineer';

https://sqlzoo.net/wiki/SUM_and_COUNT
SELECT SUM(population)
FROM world;

SELECT DISTINCT continent from world;

SELECT SUM(gdp) FROM world WHERE continent = 'Africa'

SELECT COUNT(name) FROM world WHERE area > 1000000

SELECT SUM(population) FROM world WHERE name IN ('Estonia', 'Latvia', 'Lithuania')

SELECT continent, COUNT(name)
  FROM world
 GROUP BY continent
 
 SELECT continent, COUNT(name)
  FROM world WHERE population > 10000000
 GROUP BY continent
 
 SELECT continent
  FROM world
 GROUP BY continent
HAVING SUM(population)>100000000


6
SELECT Title, Domestic_sales, International_sales
FROM movies
INNER JOIN Boxoffice 
    ON movies.id = Boxoffice.Movie_id
	
SELECT Title, Domestic_sales, International_sales
FROM movies
INNER JOIN Boxoffice 
    ON movies.id = Boxoffice.Movie_id
WHERE International_sales > Domestic_sales

SELECT Title, Domestic_sales, International_sales
FROM movies
INNER JOIN Boxoffice 
    ON movies.id = Boxoffice.Movie_id
ORDER BY Rating DESC

7
SELECT DISTINCT building FROM employees;

SELECT * FROM Buildings;

SELECT DISTINCT Role, Building_name
FROM Buildings
LEFT JOIN Employees 
    ON Building_name = Building
	
8
SELECT name, role FROM employees
WHERE Building IS NULL;

SELECT DISTINCT building_name
FROM buildings 
  LEFT JOIN employees
    ON building_name = building
WHERE role IS NULL;

12
SELECT count(title), Director FROM movies
GROUP BY director;

SELECT Director, SUM(Domestic_sales), SUM(International_sales)
FROM movies 
JOIN Boxoffice 
    ON movies.id = Boxoffice.Movie_id
GROUP BY director

SELECT director, SUM(domestic_sales + international_sales) as Cumulative_sales_from_all_movies
FROM movies
    INNER JOIN boxoffice
        ON movies.id = boxoffice.movie_id
GROUP BY director;

https://sqlzoo.net/wiki/The_JOIN_operation
SELECT matchid, player FROM goal 
  WHERE teamid = 'GER'
  
SELECT id,stadium,team1,team2 
  FROM game
WHERE id = 1012

SELECT player,teamid,stadium, mdate
  FROM game JOIN goal ON (id=matchid)
WHERE teamid = 'GER'

SELECT team1, team2, player
  FROM game JOIN goal ON (id=matchid)
WHERE player LIKE 'Mario%'

SELECT player, teamid,coach, gtime
  FROM goal
JOIN eteam on teamid=id 
 WHERE gtime<=10
 
SELECT 	mdate, teamname
FROM game
JOIN eteam ON (team1=eteam.id)
WHERE coach = 'Fernando Santos'

SELECT player FROM goal
JOIN game ON id = matchid
WHERE stadium = 'National Stadium, Warsaw'

SELECT DISTINCT player
  FROM game JOIN goal ON matchid = id 
    WHERE (teamid != 'GER') AND (team1='GER' OR team2='GER')

SELECT teamname, COUNT(player)
  FROM eteam JOIN goal ON id=teamid
 GROUP BY teamname
 
SELECT stadium, COUNT(matchid)
  FROM game JOIN goal ON id=matchid
GROUP BY stadium

SELECT goal.matchid, game.mdate, count(matchid)
  FROM game JOIN goal ON id=goal.matchid
  WHERE (team1 = 'POL' OR team2 = 'POL')
group by mdate, matchid
order by matchid  (ha a group by-t fordítva írom, nem kell order by)
11-es, erre rákérdezni, hogy miért kell 2-vel a group by?????

SELECT DISTINCT matchid, mdate, COUNT(matchid)
  FROM game JOIN goal ON matchid = id 
    WHERE (teamid = 'GER') AND (team1='GER' OR team2='GER')
GROUP BY matchid, mdate

SELECT mdate,
  team1,
  SUM(CASE WHEN teamid=team1 THEN 1 ELSE 0 END) score1,
team2,
  SUM(CASE WHEN teamid=team2 THEN 1 ELSE 0 END) score2
  FROM game LEFT JOIN goal ON matchid = id
group by mdate,matchid,
  team1,team2
  
  Todo App:
   1 tábla: id, tennivaló, készvane (boolean)
   
   
https://sqlzoo.net/wiki/Self_join
select count(id) from stops

select id from stops
where name = 'Craiglockhart' 

- (ezt nem értettem)

SELECT company, num, COUNT(*)
FROM route WHERE stop=149 OR stop=53
GROUP BY company, num
HAVING COUNT(*) = 2

SELECT a.company, a.num, a.stop, b.stop
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
WHERE a.stop=53 AND b.stop = 149

SELECT a.company, a.num, stopa.name, stopb.name
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
  JOIN stops stopa ON (a.stop=stopa.id)
  JOIN stops stopb ON (b.stop=stopb.id)
WHERE stopa.name='Craiglockhart' AND stopb.name='London Road'