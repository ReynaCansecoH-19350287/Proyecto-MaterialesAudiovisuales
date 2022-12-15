-- MariaDB dump 10.19  Distrib 10.11.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: Proyecto
-- ------------------------------------------------------
-- Server version	10.11.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `materiales`
--

DROP TABLE IF EXISTS `materiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materiales` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Material` varchar(255) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materiales`
--

LOCK TABLES `materiales` WRITE;
/*!40000 ALTER TABLE `materiales` DISABLE KEYS */;
INSERT INTO `materiales` VALUES
(1,'Proyector',10,'S','2022-12-15 02:26:49','2022-12-15 02:26:49'),
(2,'Audifonos',18,'N','2022-12-15 02:27:25','2022-12-15 02:27:25'),
(3,'Microfonos',12,'S','2022-12-15 04:43:40','2022-12-15 04:52:49');
/*!40000 ALTER TABLE `materiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestamos`
--

DROP TABLE IF EXISTS `prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prestamos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PersonaEntrego` varchar(255) NOT NULL,
  `PersonaRecibo` varchar(255) NOT NULL,
  `Material` varchar(255) NOT NULL,
  `HoraPrestamo` time DEFAULT NULL,
  `TiempoPrestamo` time DEFAULT NULL,
  `HoraEntrega` time NOT NULL,
  `FechaPrestamo` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamos`
--

LOCK TABLES `prestamos` WRITE;
/*!40000 ALTER TABLE `prestamos` DISABLE KEYS */;
INSERT INTO `prestamos` VALUES
(1,'Odemaris Martinez','Abigail Romero','Proyector','08:00:00','01:00:00','09:00:00','2022-12-14','S','2022-12-15 02:28:45','2022-12-15 02:28:45'),
(2,'Jorge Luis Espinoza','Felipe de Jesus Niño','Proyector','09:00:00','30:00:00','09:30:00','2022-12-12','N','2022-12-15 02:30:55','2022-12-15 05:24:50'),
(3,'Jose Alberto Villalobos','Angel Santillan','Audifonos','11:00:00','01:00:00','12:00:00','2022-12-14','S','2022-12-15 05:23:41','2022-12-15 05:32:48');
/*!40000 ALTER TABLE `prestamos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Departamento` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES
(1,'reynacansecohernandez@gmail.com','Reyna','Canseco Hernandez','1234','Sistemas Computacionales','S','2022-12-15 02:32:04','2022-12-15 02:32:04'),
(2,'ethansibaja@gmail.com','Ethan','Sibaja Valdes','2804','Administracion','N','2022-12-15 02:32:47','2022-12-15 02:32:47'),
(3,'yolandacansecohernandez@gmail.com','Yolanda','Canseco Hernandez','$2a$10$njyx6ReUR7n3UlPAGWhR3.vv0OgXO1JUqxhSRYze2tzyW0.7u2rFC','Administracion','S','2022-12-15 04:41:28','2022-12-15 04:42:31');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 23:46:14
