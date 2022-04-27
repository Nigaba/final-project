-- Adminer 4.8.1 MySQL 8.0.28 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

USE `final_project`;

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `CoachStats`;
CREATE TABLE `CoachStats` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `PeopleID` int unsigned NOT NULL,
  `Season` year NOT NULL,
  `Wins` int unsigned NOT NULL DEFAULT '0',
  `Losses` int unsigned NOT NULL DEFAULT '0',
  `Ties` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `PeopleID` (`PeopleID`),
  CONSTRAINT `CoachStats_ibfk_2` FOREIGN KEY (`PeopleID`) REFERENCES `People` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `People`;
CREATE TABLE `People` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `DOB` year DEFAULT NULL,
  `Height` int unsigned NOT NULL DEFAULT '0',
  `Weight` int unsigned NOT NULL DEFAULT '0',
  `Nationality` varchar(64) NOT NULL,
  `Role` enum('Coach','Player') NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `PeopleBios`;
CREATE TABLE `PeopleBios` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `LastUpdate` timestamp NOT NULL,
  `PeopleID` int unsigned NOT NULL,
  `ImageFile` varchar(128) DEFAULT NULL,
  `Desc` text NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `PeopleID` (`PeopleID`),
  CONSTRAINT `PeopleBios_ibfk_1` FOREIGN KEY (`PeopleID`) REFERENCES `People` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `PlayerStats`;
CREATE TABLE `PlayerStats` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `PeopleID` int unsigned NOT NULL,
  `Season` year NOT NULL,
  `Position` char(1) NOT NULL,
  `Games` int unsigned NOT NULL DEFAULT '0',
  `Fouls` int unsigned NOT NULL DEFAULT '0',
  `Assists` int unsigned NOT NULL DEFAULT '0',
  `Goals` int unsigned NOT NULL DEFAULT '0',
  `Saves` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `PeopleID` (`PeopleID`),
  CONSTRAINT `PlayerStats_ibfk_1` FOREIGN KEY (`PeopleID`) REFERENCES `People` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Title` text NOT NULL,
  `Body` longtext NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2022-04-27 23:15:21
