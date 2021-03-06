-- Adminer 4.8.1 MySQL 8.0.28 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `final_project`;

SET NAMES utf8mb4;

INSERT INTO `CoachStats` (`ID`, `PeopleID`, `Season`, `Wins`, `Losses`, `Ties`) VALUES
(2,	13,	'2022',	17,	4,	13),
(5,	14,	'2019',	14,	12,	8),
(6,	14,	'2018',	3,	26,	5),
(8,	14,	'2021',	25,	6,	3),
(9,	14,	'2020',	27,	4,	3)
ON DUPLICATE KEY UPDATE `ID` = VALUES(`ID`), `PeopleID` = VALUES(`PeopleID`), `Season` = VALUES(`Season`), `Wins` = VALUES(`Wins`), `Losses` = VALUES(`Losses`), `Ties` = VALUES(`Ties`);

INSERT INTO `People` (`ID`, `Name`, `DOB`, `Height`, `Weight`, `Nationality`, `Role`) VALUES
(1,	'Sonam Ekenedilichukwu',	'1993',	65,	123,	'Bhutan',	'Player'),
(2,	'Yamikani Yalwa',	'1984',	66,	185,	'Zambia',	'Player'),
(3,	'Celyn Naomi',	'1969',	64,	109,	'British',	'Player'),
(4,	'Khayrat Haru',	'2000',	59,	57,	'Egyptian',	'Player'),
(5,	'Glaucia Uche',	'1998',	64,	125,	'Italian',	'Player'),
(6,	'Udo Yona',	'1993',	69,	150,	'Nigerian',	'Player'),
(7,	'Omer Aştî',	'1996',	70,	166,	'Israeli',	'Player'),
(8,	'Mikhayahu Odell',	'1973',	69,	158,	'Canadian',	'Player'),
(9,	'Ndidi Lux',	'1999',	69,	131,	'Nigerian',	'Player'),
(10,	'Oghenekaro Yating',	'1985',	80,	40,	'Nigerian',	'Player'),
(11,	'Pittiulaaq Suman',	'1995',	82,	55,	'Canadian',	'Player'),
(12,	'Merlyn Jaya',	'1969',	69,	211,	'American',	'Player'),
(13,	'Kamala Pich',	'1966',	67,	164,	'Indian',	'Coach'),
(14,	'Ebrar Parker',	'1957',	65,	144,	'Turkish',	'Coach'),
(15,	'Athol Shashi',	'1984',	69,	137,	'British',	'Player'),
(16,	'Laverne Nur',	'1995',	75,	120,	'Canadian',	'Player'),
(17,	'Awee Abiola',	'1981',	60,	110,	'American',	'Player'),
(18,	'Karabo Safaa\'',	'2003',	78,	136,	'South African',	'Player'),
(19,	'Noor Tabassum',	'1987',	67,	166,	'Egyptian',	'Player'),
(20,	'Radha Ji-Min',	'1992',	82,	86,	'Indian',	'Player')
ON DUPLICATE KEY UPDATE `ID` = VALUES(`ID`), `Name` = VALUES(`Name`), `DOB` = VALUES(`DOB`), `Height` = VALUES(`Height`), `Weight` = VALUES(`Weight`), `Nationality` = VALUES(`Nationality`), `Role` = VALUES(`Role`);

INSERT INTO `PeopleBios` (`ID`, `LastUpdate`, `PeopleID`, `ImageFile`, `Desc`) VALUES
(1,	'2022-04-25 01:03:52',	1,	'01.png',	'A Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team'),
(2,	'2022-04-25 01:04:05',	2,	'02.png',	'is a Mexican professional footballer who captains and plays for Major League Soccer club Los Angeles FC. Described as a versatile player who can play as a forward, winger, and attacking midfielder, Vela is known for being a creative player and prolific scorer.'),
(3,	'2022-04-25 01:08:10',	3,	'03.png',	'is a Paraguayan professional footballer who plays as a winger and forward for Major League Soccer club Austin FC and the Paraguay national team'),
(4,	'2022-04-25 01:08:17',	4,	'04.png',	'is a Uruguayan professional footballer who plays as a winger for Major League Soccer club Orlando City and the Uruguay national team. Torres has previously played for Peñarol where he won 2021 Uruguayan Primera División title.'),
(5,	'2022-04-25 01:08:24',	5,	'05.png',	'is an American professional soccer player who plays as a forward for Major League Soccer side New England Revolution and the United States national team. Altidore made his professional debut in 2006, at the age of 16, with the New York Red Bulls'),
(6,	'2022-04-25 01:08:32',	6,	'01.png',	'is a French professional footballer who most recently played as a midfielder for Major League Soccer club Inter Miami. Matuidi began his football career playing for amateur clubs in the Île-de-France region, such as US Fontenay-sous-Bois and CO Vincennois'),
(7,	'2022-04-25 01:08:39',	7,	'02.png',	' is a Brazilian professional footballer who plays as a winger for Major League Soccer club New York City FC. He was included in The Guardian\'s \"Next Generation 2019\".'),
(8,	'2022-04-25 04:12:04',	13,	'01.jpg',	' is a Portuguese professional football manager and former player who is the current head coach of Italian Serie A club Roma. He is widely considered to be one of the greatest managers of all time, and is one of the most decorated managers ever.'),
(9,	'2022-04-25 04:12:11',	14,	'02.jpg',	'is a Mexican professional football manager and former player, who is the current head coach of Major League Soccer club Atlanta United. Pineda played as a defensive midfielder for several clubs in Mexico, and also represented Mexico internationally')
ON DUPLICATE KEY UPDATE `ID` = VALUES(`ID`), `LastUpdate` = VALUES(`LastUpdate`), `PeopleID` = VALUES(`PeopleID`), `ImageFile` = VALUES(`ImageFile`), `Desc` = VALUES(`Desc`);

INSERT INTO `PlayerStats` (`ID`, `PeopleID`, `Season`, `Position`, `Games`, `Fouls`, `Assists`, `Goals`, `Saves`) VALUES
(1,	1,	'2022',	'F',	29,	2,	32,	5,	0),
(2,	2,	'2022',	'M',	10,	2,	52,	1,	0),
(3,	3,	'2022',	'G',	31,	2,	46,	0,	24),
(4,	4,	'2022',	'D',	16,	1,	58,	2,	0),
(5,	5,	'2022',	'G',	33,	2,	67,	0,	1),
(6,	6,	'2022',	'F',	17,	4,	63,	38,	0),
(7,	7,	'2022',	'F',	4,	1,	62,	1,	0),
(8,	8,	'2022',	'F',	29,	4,	21,	33,	0),
(9,	9,	'2022',	'M',	25,	3,	58,	2,	0),
(10,	10,	'2022',	'D',	29,	0,	60,	51,	0),
(11,	11,	'2022',	'M',	4,	4,	33,	18,	0),
(12,	12,	'2022',	'M',	9,	4,	50,	60,	0),
(13,	15,	'2022',	'G',	5,	3,	44,	0,	29),
(14,	16,	'2022',	'G',	1,	4,	5,	0,	15),
(15,	17,	'2022',	'F',	15,	4,	38,	38,	0),
(16,	18,	'2022',	'F',	5,	1,	73,	49,	0),
(17,	19,	'2022',	'M',	34,	4,	58,	55,	0),
(18,	20,	'2022',	'G',	5,	3,	40,	0,	20),
(19,	1,	'2021',	'F',	2,	1,	27,	10,	0),
(20,	2,	'2021',	'M',	23,	3,	70,	47,	0),
(21,	3,	'2021',	'G',	1,	0,	60,	0,	7),
(22,	4,	'2021',	'D',	10,	4,	76,	51,	0),
(23,	5,	'2021',	'G',	15,	3,	77,	0,	21),
(24,	6,	'2021',	'F',	17,	3,	10,	48,	0),
(25,	7,	'2021',	'F',	32,	4,	2,	40,	0),
(26,	8,	'2021',	'F',	4,	3,	62,	11,	0),
(27,	9,	'2021',	'M',	2,	0,	39,	20,	0),
(28,	10,	'2021',	'D',	33,	1,	21,	26,	0),
(29,	11,	'2021',	'M',	23,	0,	23,	44,	0),
(30,	12,	'2021',	'M',	4,	0,	45,	22,	0),
(31,	15,	'2021',	'G',	30,	0,	56,	0,	16),
(32,	16,	'2021',	'G',	7,	1,	17,	0,	3),
(33,	17,	'2021',	'F',	4,	0,	16,	47,	0),
(34,	18,	'2021',	'F',	10,	4,	74,	55,	0),
(35,	19,	'2021',	'M',	17,	2,	71,	35,	0),
(36,	20,	'2021',	'G',	26,	4,	52,	0,	22),
(37,	1,	'2020',	'F',	34,	4,	29,	45,	0),
(38,	2,	'2020',	'M',	21,	1,	48,	57,	0),
(39,	3,	'2020',	'G',	4,	1,	41,	0,	21),
(40,	4,	'2020',	'D',	29,	3,	51,	36,	0),
(41,	5,	'2020',	'G',	8,	4,	13,	0,	9),
(42,	6,	'2020',	'F',	9,	3,	23,	14,	0),
(43,	7,	'2020',	'F',	8,	1,	28,	41,	0),
(44,	8,	'2020',	'F',	32,	2,	54,	28,	0),
(45,	9,	'2020',	'M',	8,	4,	35,	4,	0),
(46,	10,	'2020',	'D',	10,	4,	61,	37,	0),
(47,	11,	'2020',	'M',	2,	0,	8,	33,	0),
(48,	12,	'2020',	'M',	12,	0,	63,	13,	0),
(49,	15,	'2020',	'G',	24,	3,	25,	0,	24),
(50,	16,	'2020',	'G',	23,	0,	62,	0,	12),
(51,	17,	'2020',	'F',	25,	2,	16,	23,	0),
(52,	18,	'2020',	'F',	27,	4,	13,	10,	0),
(53,	19,	'2020',	'M',	12,	2,	62,	36,	0),
(54,	20,	'2020',	'G',	32,	0,	46,	0,	19),
(55,	1,	'2019',	'F',	23,	0,	0,	21,	0),
(56,	2,	'2019',	'M',	22,	0,	70,	57,	0),
(57,	3,	'2019',	'G',	9,	1,	47,	0,	8),
(58,	4,	'2019',	'D',	26,	0,	6,	26,	0),
(59,	5,	'2019',	'G',	2,	2,	29,	0,	28),
(60,	6,	'2019',	'F',	8,	2,	59,	48,	0),
(61,	7,	'2019',	'F',	2,	4,	19,	33,	0),
(62,	8,	'2019',	'F',	9,	1,	60,	32,	0),
(63,	9,	'2019',	'M',	23,	3,	80,	55,	0),
(64,	10,	'2019',	'D',	32,	1,	13,	14,	0),
(65,	11,	'2019',	'M',	9,	1,	26,	35,	0),
(66,	12,	'2019',	'M',	3,	3,	71,	50,	0),
(67,	15,	'2019',	'G',	15,	4,	0,	0,	25),
(68,	16,	'2019',	'G',	20,	3,	70,	0,	27),
(69,	17,	'2019',	'F',	27,	1,	37,	28,	0),
(70,	18,	'2019',	'F',	3,	3,	68,	26,	0),
(71,	19,	'2019',	'M',	21,	1,	63,	5,	0),
(72,	20,	'2019',	'G',	22,	3,	39,	0,	7),
(73,	1,	'2018',	'F',	8,	2,	48,	59,	0),
(74,	2,	'2018',	'M',	21,	2,	78,	58,	0),
(75,	3,	'2018',	'G',	3,	1,	49,	0,	18),
(76,	4,	'2018',	'D',	4,	1,	44,	35,	0),
(77,	5,	'2018',	'G',	22,	0,	69,	0,	25),
(78,	6,	'2018',	'F',	15,	2,	24,	54,	0),
(79,	7,	'2018',	'F',	4,	2,	34,	15,	0),
(80,	8,	'2018',	'F',	11,	3,	54,	7,	0),
(81,	9,	'2018',	'M',	20,	4,	4,	15,	0),
(82,	10,	'2018',	'D',	22,	0,	48,	46,	0),
(83,	11,	'2018',	'M',	24,	4,	7,	43,	0),
(84,	12,	'2018',	'M',	26,	2,	37,	35,	0),
(85,	15,	'2018',	'G',	27,	3,	67,	0,	1),
(86,	16,	'2018',	'G',	2,	2,	9,	0,	12),
(87,	17,	'2018',	'F',	16,	2,	56,	44,	0),
(88,	18,	'2018',	'F',	24,	0,	27,	52,	0),
(89,	19,	'2018',	'M',	33,	2,	58,	24,	0),
(90,	20,	'2018',	'G',	23,	4,	8,	0,	23)
ON DUPLICATE KEY UPDATE `ID` = VALUES(`ID`), `PeopleID` = VALUES(`PeopleID`), `Season` = VALUES(`Season`), `Position` = VALUES(`Position`), `Games` = VALUES(`Games`), `Fouls` = VALUES(`Fouls`), `Assists` = VALUES(`Assists`), `Goals` = VALUES(`Goals`), `Saves` = VALUES(`Saves`);

INSERT INTO `Posts` (`ID`, `Title`, `Body`) VALUES
(1,	'Watch Horror Error By Goalkeeper Ionut Radu Damage Inter Milan\'s Serie A Title Bid',	'Inter Milan are no longer in pole position to win the Serie A title after their 11-game unbeaten run in all competitions ended courtesy of a horrible goalkeeper error.\r\n\r\nAfter winning their previous five matches, Inter were expected to return to the top of the table on Wednesday night.\r\n\r\nTo achieve that feat they needed to win at Bologna in a game which had been rescheduled from January when it was postposed due to a COVID outbreak.\r\n\r\nInter looked set to cruise back to top spot when Ivan Perisic gave them the lead on three minutes with his eighth goal of the season.\r\n\r\nBut Marko Arnautovic equalized for Bologna midway through the first half.\r\n\r\nInter were bossing the game in terms of possession and chances but self-destruction was waiting around the corner.\r\n\r\nTen minutes from the end, back-up Inter keeper Andrei Radu produced a huge mistake which handed Bologna a second goal on a plate.\r\n\r\nPerisic played a throw-in square from deep inside his own half towards Stefan De Vrij, who left the ball to Radu.\r\n\r\nThen came the moment that will be replayed over and over if AC Milan go on to beat Inter to the title.\r\n\r\nRadu attempted to play a sweeping pass to his right, but miskicked the ball and sent it rolling towards his net before Nicola Sansone shot home from extremely close range.\r\n\r\nThis was only Radu\'s second appearance of the season. The 24-year-old was starting in place of regular stopper Samir Handonovic, who had a knock.\r\n\r\nInter Milan keeper Andrei Radu produces an error before Nicola Sansone (right) scores for Bologna'),
(2,	'Florida Women\'s Soccer Coach Tony Amato Fired After Player Complaints About Behavior',	'Joe Prior/Visionhaus via Getty Images\r\nThe University of Florida fired women\'s soccer coach Tony Amato on Wednesday amid player complaints about his conduct.\r\n\r\nFlorida athletics director Scott Stricklin released a statement saying there was \"a disconnect between [Amato] and his athletes\": \r\n\r\n\"This decision was extremely difficult. My thorough evaluation of the soccer program is that there is a disconnect between Tony and his athletes. We have worked diligently with Tony since last fall when I first became aware of challenges with relationship building and communication. As the issues continued to be brought to my attention, it became apparent that sufficient progress was not being made and Tony was not a fit for the University of Florida. Therefore, it is my assessment that in order to have the program we all expect, this change is necessary. I appreciate Tony\'s hard work during his time here and wish he and his family the best.\r\n\r\n\"I fully recognize the disruption this causes our athletes and our program. We all wanted this to work, but ultimately it is my responsibility to do what is in the best long-term interest of this program, and thus this decision. We are totally committed to having an outstanding soccer program. I assure everyone this is extremely important to all of us as we begin the search for our new coach.\"\r\n\r\nSeveral Florida players have announced their intention to leave the program since Amato took over last May. \r\n\r\nAccording to Payton Titus of WUFT, an investigative report into Amato\'s behavior was set to be published later this week.\r\n\r\nPlayers said Amato made derogatory comments about their bodies and eating habits over the course of the season, per Titus. After receiving complaints from players and coaches, Strickland promised an investigation into the matter.\r\n\r\nIt\'s unclear if Amato\'s firing was a result of that investigation, which the school never announced publicly.\r\n\r\nOne former Florida player said she developed an eating disorder while playing for Amato.\r\n\r\n“I know I’m in no way, shape or form fat, but it was like, you could see who he played versus who he didn’t play,\" the player told Titus. \"And every single person was just stick-thin. And the comments about eating got to me.\"\r\n\r\nAmato also allegedly had players adhering to a strict diet and would criticize them if they were seen eating anything he deemed unhealthy.\r\n\r\nSeveral players at Amato\'s former stop at Arizona also said he was demanding and made demeaning comments, leading to a high transfer rate, according to Titus. Amato coached at Arizona from 2013 to 2021. '),
(4,	'Report: Manchester United Centre Back Harry Maguire Out For Rest Of The Season Following Injury - Erik Ten Hag Looking For New Centre Back',	'According to reports, Manchester United defender Harry Maguire could miss what\'s left of the season due to an injury. The number 5\'s performance on the pitch has made new manager Erik Ten Hag look for a new centre back in the market.\r\n\r\nMaguire\'s season with the Red Devils has been a complete nightmare so far, all this due to a huge drop in the Captain\'s performance that did not help the Old Trafford side very much.\r\n\r\nThe England International is trying his best to be back from a knee injury, but chances of recovering before the end of the season are low.\r\n\r\nHarry Maguire\r\nAs a consequence, the defender couldn\'t be part of the starting eleven against Arsenal last Saturday.\r\n\r\nIn that game, Harry Maguire was replaced by Victor Lindelof. Also, Rangnick said the number 5 will also miss the home game against Chelsea tomorrow, Thursday the 28th.\r\n\r\nAccording to Sportsmail via Dailymail, Maguire\'s injury could put him on the side for what\'s left of the season, keeping him from playing the last four games for the Red Devils.\r\n\r\nIt was claimed, the 29-year-old centre back\'s future at Old Trafford is uncertain as only three years after an 87million euros transfer fee paid to Leicester have passed and of course, new manager Erik Ten Hag is looking for a new centre back to replace the defender. A situation that is not easy to handle at all.\r\n\r\nRead More Manchester United Coverage:\r\n\r\nFollow The Utd Transfer Room: Twitter | Facebook & Instagram Coming Soon\r\n\r\n')
ON DUPLICATE KEY UPDATE `ID` = VALUES(`ID`), `Title` = VALUES(`Title`), `Body` = VALUES(`Body`);

-- 2022-04-27 23:15:25
