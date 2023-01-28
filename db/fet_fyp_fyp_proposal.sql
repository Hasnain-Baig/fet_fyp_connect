-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fet_fyp
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fyp_proposal`
--

DROP TABLE IF EXISTS `fyp_proposal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fyp_proposal` (
  `Proposal_ID` int NOT NULL AUTO_INCREMENT,
  `Coordinator_ID` int NOT NULL,
  `Project_Status` varchar(45) DEFAULT NULL,
  `Idea_ID` int DEFAULT NULL,
  `FYP_ID` int NOT NULL,
  `FYP_Name` varchar(50) NOT NULL,
  `Teacher_ID` int NOT NULL,
  `Group_ID` varchar(20) NOT NULL,
  `Proposal` varchar(100) DEFAULT NULL,
  `Thesis` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Proposal_ID`),
  KEY `Coordinator_ID_idx` (`Coordinator_ID`),
  KEY `Idea_ID_idx` (`Idea_ID`),
  KEY `FYP_ID_idx` (`FYP_ID`),
  KEY `Teacher_ID_idx` (`Teacher_ID`),
  CONSTRAINT `Coordinator_ID` FOREIGN KEY (`Coordinator_ID`) REFERENCES `coordinator` (`Coordinator_ID`),
  CONSTRAINT `FYP_ID` FOREIGN KEY (`FYP_ID`) REFERENCES `fyp_group` (`FYP_ID`),
  CONSTRAINT `Teacher_ID` FOREIGN KEY (`Teacher_ID`) REFERENCES `teacher` (`Teacher_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fyp_proposal`
--

LOCK TABLES `fyp_proposal` WRITE;
/*!40000 ALTER TABLE `fyp_proposal` DISABLE KEYS */;
INSERT INTO `fyp_proposal` VALUES (1,1,'Proposal Accepted by Coordinator',2,2,'AI Fitness Game',1,'2022-SWEM-1','0000000000001.pdf',NULL),(2,1,'Proposal Accepted by Coordinator',1,3,'Eat and Greet',2,'2022-SWEM-2','0000000000002.pdf',NULL),(3,1,'Proposal Accepted by Coordinator',3,1,'FET FYP Process Automation System',2,'2022-SWEM-3','0000000000003.pdf',NULL);
/*!40000 ALTER TABLE `fyp_proposal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 22:46:07
