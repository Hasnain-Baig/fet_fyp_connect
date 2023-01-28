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
-- Table structure for table `fyp_group`
--

DROP TABLE IF EXISTS `fyp_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fyp_group` (
  `FYP_ID` int NOT NULL AUTO_INCREMENT,
  `Dept_Name` varchar(50) NOT NULL,
  `Primary_Email` varchar(50) NOT NULL,
  `Student_ID1` varchar(50) NOT NULL,
  `Student_ID2` varchar(50) DEFAULT NULL,
  `Student_ID3` varchar(50) DEFAULT NULL,
  `Student_ID4` varchar(50) DEFAULT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`FYP_ID`),
  KEY `Student_ID1_idx` (`Student_ID1`),
  KEY `Student_ID2_idx` (`Student_ID2`),
  KEY `Student_ID3_idx` (`Student_ID3`),
  CONSTRAINT `Student_ID1` FOREIGN KEY (`Student_ID1`) REFERENCES `student` (`Student_ID`),
  CONSTRAINT `Student_ID2` FOREIGN KEY (`Student_ID2`) REFERENCES `student` (`Student_ID`),
  CONSTRAINT `Student_ID3` FOREIGN KEY (`Student_ID3`) REFERENCES `student` (`Student_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fyp_group`
--

LOCK TABLES `fyp_group` WRITE;
/*!40000 ALTER TABLE `fyp_group` DISABLE KEYS */;
INSERT INTO `fyp_group` VALUES (1,'Software Engineering','rabia.rpo@gmail.com','2k19-SWE-80','2k19-SWE-18','2k19-SWE-42',NULL,'$2b$10$WOOB39Uau5BMV9ArzjC6Weax/NJSo5LbCHiV4nD4kWFTiu48onjFK'),(2,'Software Engineering ','yusra@gmail.com','2k19-SWE-121','2k19-SWE-32','2k19-SWE-88',NULL,'$2b$10$TjTehgEA.JjV6z0n7EY2ceAzs4NurKxGw0O9MctCbIuH3FedzLmnG'),(3,'Software Engineering ','fariza@gmail.com','2k19-SWE-33','2k19-SWE-116',NULL,NULL,'$2b$10$f9WGXCJA9d4L6VJUikzC/uMn2CaXjrvicGQS7tfsN1SZXiO2N3g26');
/*!40000 ALTER TABLE `fyp_group` ENABLE KEYS */;
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
