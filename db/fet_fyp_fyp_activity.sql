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
-- Table structure for table `fyp_activity`
--

DROP TABLE IF EXISTS `fyp_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fyp_activity` (
  `Activity_ID` int NOT NULL AUTO_INCREMENT,
  `Activity_Type` varchar(50) NOT NULL,
  `Activity_By` varchar(50) NOT NULL,
  `Activity_Date` varchar(20) NOT NULL,
  `Proposal_ID` int NOT NULL,
  PRIMARY KEY (`Activity_ID`),
  KEY `activity_Proposal_ID_idx` (`Proposal_ID`),
  CONSTRAINT `activity_Proposal_ID` FOREIGN KEY (`Proposal_ID`) REFERENCES `fyp_proposal` (`Proposal_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fyp_activity`
--

LOCK TABLES `fyp_activity` WRITE;
/*!40000 ALTER TABLE `fyp_activity` DISABLE KEYS */;
INSERT INTO `fyp_activity` VALUES (1,'Proposal Submitted to Supervisor','FYP Group','2022-04-13',1),(2,'Proposal Approved by Supervisor','Supervisor','2022-04-14',1),(3,'Proposal Submitted to Supervisor','FYP Group','2022-04-13',2),(4,'Proposal Approved by Supervisor','Supervisor','2022-04-15',2),(8,'Proposal Submitted to Supervisor','Supervisor','2022-04-29',3),(12,'Proposal Approved by Supervisor','Coordinator','2022-04-30',3),(13,'Proposal Submitted to Coordinator','FYP Group','2022-04-14',1),(14,'Proposal Accepted by Coordinator','Coordinator','2022-04-14',1),(15,'Proposal Submitted to Coordinator','FYP Group','2022-04-16',2),(16,'Proposal Accepted by Coordinator','Coordinator','2022-04-16',2),(17,'Proposal Submitted to Coordinator','FYP Group','2022-05-01',3),(18,'Proposal Accepted by Coordinator','Coordinator','2022-05-02',3);
/*!40000 ALTER TABLE `fyp_activity` ENABLE KEYS */;
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
