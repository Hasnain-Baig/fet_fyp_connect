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
-- Table structure for table `fyp_idea`
--

DROP TABLE IF EXISTS `fyp_idea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fyp_idea` (
  `Idea_ID` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(50) NOT NULL,
  `Tools` varchar(50) DEFAULT NULL,
  `Description` varchar(300) DEFAULT NULL,
  `Idea_Taken` varchar(45) NOT NULL,
  `FYP_ID` int DEFAULT NULL,
  `Teacher_ID` int DEFAULT NULL,
  PRIMARY KEY (`Idea_ID`),
  KEY `FYP_ID_idx` (`FYP_ID`),
  KEY `Teacher_ID_idx` (`Teacher_ID`),
  CONSTRAINT `Idea_FYP_ID` FOREIGN KEY (`FYP_ID`) REFERENCES `fyp_group` (`FYP_ID`),
  CONSTRAINT `Idea_Teacher_ID` FOREIGN KEY (`Teacher_ID`) REFERENCES `teacher` (`Teacher_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fyp_idea`
--

LOCK TABLES `fyp_idea` WRITE;
/*!40000 ALTER TABLE `fyp_idea` DISABLE KEYS */;
INSERT INTO `fyp_idea` VALUES (1,'Eat and Greet',NULL,NULL,'Yes',3,NULL),(2,'AI Fitness Game',NULL,NULL,'Yes',2,NULL),(3,'FET FYP Automation System','Web Application','Automation Final Year Project System of FET','Yes',1,2),(4,'Cyber System','Wireshark, PHP','This is a cyber system and it identifies vulnurablities.','No',NULL,1),(5,'Hacking App','VMWare, Wireshark, LINUX','This is a hacking app which hacks mobile passwords.','No',NULL,3);
/*!40000 ALTER TABLE `fyp_idea` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-23 22:46:06
