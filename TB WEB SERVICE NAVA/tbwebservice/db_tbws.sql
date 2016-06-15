-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2016 at 06:11 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_tbws`
--

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE IF NOT EXISTS `dosen` (
  `dosen_nik` varchar(15) NOT NULL,
  `dosen_nama` varchar(50) NOT NULL,
  `dosen_matkul` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`dosen_nik`, `dosen_nama`, `dosen_matkul`) VALUES
('1122335555', 'M.Nurkamal, ST., MT', 'Web Service'),
('1122334444', 'M.Yusril, S.Kom., M.Kom', 'Jaringan Komputer'),
('1122336666', 'Woro Isti, ST., MT', 'Ansi'),
('1122337777', 'Roni A, ST., M.Kom', 'Web Design');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `description`) VALUES
(1, 'admin', 'Administrator'),
(2, 'members', 'General User');

-- --------------------------------------------------------

--
-- Table structure for table `kelas`
--

CREATE TABLE IF NOT EXISTS `kelas` (
  `kelas_id` int(3) NOT NULL AUTO_INCREMENT,
  `kelas_nama` varchar(50) NOT NULL,
  `kelas_icon` varchar(50) NOT NULL,
  `kelas_warna` varchar(50) NOT NULL,
  PRIMARY KEY (`kelas_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `kelas`
--

INSERT INTO `kelas` (`kelas_id`, `kelas_nama`, `kelas_icon`, `kelas_warna`) VALUES
(1, '2A', 'ion-university', 'orange'),
(2, '2B', 'ion-university', 'purple'),
(3, '2C', 'ion-university', 'yellow'),
(4, '2D', 'ion-university', 'green');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `login_id` int(3) NOT NULL AUTO_INCREMENT,
  `login_username` varchar(50) NOT NULL,
  `login_password` varchar(50) NOT NULL,
  `login_nama` varchar(50) NOT NULL,
  `login_tlp` char(20) NOT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `login_username`, `login_password`, `login_nama`, `login_tlp`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Nava Gia Ginasta', '087820033395');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE IF NOT EXISTS `mahasiswa` (
  `mahasiswa_id` int(2) NOT NULL AUTO_INCREMENT,
  `mahasiswa_npm` varchar(10) NOT NULL,
  `mahasiswa_nama` varchar(25) NOT NULL,
  `mahasiswa_alamat` text NOT NULL,
  `mahasiswa_email` varchar(50) NOT NULL,
  `mahasiswa_tlp` varchar(15) NOT NULL,
  `mahasiswa_agama` varchar(11) NOT NULL,
  `kelas_id` int(3) NOT NULL,
  PRIMARY KEY (`mahasiswa_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`mahasiswa_id`, `mahasiswa_npm`, `mahasiswa_nama`, `mahasiswa_alamat`, `mahasiswa_email`, `mahasiswa_tlp`, `mahasiswa_agama`, `kelas_id`) VALUES
(1, '1144096', 'Nava Gia Ginasta', 'Cianjur', 'navagiaginasta@gmail.com', '087820033395', 'Islam', 4),
(23, '1144014', 'Ayu Anggara', 'Parepare', 'ayu@gmail.com', '1029929', 'Islam', 4),
(24, '99', '1991', '99', '999', '2992', '299', 2);

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `link` varchar(50) NOT NULL,
  `icon` varchar(30) NOT NULL,
  `is_active` int(1) NOT NULL,
  `is_parent` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `link`, `icon`, `is_active`, `is_parent`) VALUES
(15, 'menu management', 'menu', 'fa fa-list-alt', 1, 0),
(16, 'data mahasiswa', 'mahasiswa', 'fa fa-graduation-cap', 1, 0),
(17, 'login', 'login', 'fa fa-users', 1, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
