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
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Student_ID` varchar(30) NOT NULL,
  `Student_Name` varchar(50) NOT NULL,
  `Student_Email` varchar(50) NOT NULL,
  PRIMARY KEY (`Student_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('2k19-SWE-04','Abdul Qadeer','abdulqadeer@gmail.com'),('2k19-SWE-10','Ali','ali@gmail.com'),('2k19-SWE-11','Aman','aman@gmail.com'),('2k19-SWE-116','Tehniyat Rashid','tehniyat@gmail.com'),('2k19-SWE-12','Anabya','anabya@gmail.com'),('2k19-SWE-121','Yusra Shaikh','yusra.xhaikh@gmail.com'),('2k19-SWE-128','XYZ','xyz@gmail.com'),('2k19-SWE-18','Asim Attique','anokhajutt679@gmail.com'),('2k19-SWE-27','Elsa Shaikh','elsa@gmail.com'),('2k19-SWE-32','Farhan Memon','farhan@gmail.com'),('2k19-SWE-33','Fariza Siddiqui','fariza@gmail.com'),('2k19-SWE-34','Farwa Kahn','farwa@gmail.com'),('2k19-SWE-42','Hasnain Baig','mirza.sahib@gmail.com'),('2k19-SWE-49','Iraj Mashkoor','iraj@gmail.com'),('2k19-SWE-58','Mohsin Jokhio','mohsin@gmail.com'),('2k19-SWE-75','Naima Shaikh','naima@gmail.com'),('2k19-SWE-77','Nimra Shaikh','nimra@gmail.com'),('2k19-SWE-80','Rabia Shaikh','rabia.rpo@gmail.com'),('2k19-SWE-81','Rabia Kiran','rabia@gmail.com'),('2k19-SWE-88','Saeed Ahmed','saeeeeed@gmail.com'),('2k19-SWE-89','Safia Shaikh','safia@gmail.com'),('2k19-SWE-90','Sahar Azhar','sahar@gmail.com'),('2k19-SWE-93','Sajjad Qureshi','sajjad@gmail.com');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
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
