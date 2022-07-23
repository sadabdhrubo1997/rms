-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 19, 2021 at 01:40 PM
-- Server version: 10.3.31-MariaDB-log-cll-lve
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rmscjndv_react_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `aboutUs` text NOT NULL,
  `howItBegan` text NOT NULL,
  `ourCoreValues` text NOT NULL,
  `ourMission` text NOT NULL,
  `ourVision` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `aboutUs`, `howItBegan`, `ourCoreValues`, `ourMission`, `ourVision`) VALUES
(1, 'We are a bespoke service specializing in bag and apparel manufacture for companies all over Bangladesh with whom we have long-standing relationships. We help our clients save money, time and energy while providing them with products of high quality.', 'RMS Corporation began its jouney in 2016 as an enlisted supplier to Bangladesh Navy to help with imports, and since then, it has expanded its business beyond importing to manufacturing, with a newly found love and passion towards bag and backpack manufacturing.\n\nThe business started as a laptop backpack solutions provider for licensed  IT distributors for various computer brands.\n\nOur service includes the whole supply chain process from designing, creating tech packs, sourcing for fabrics and trims, creating samples, bulk production, packaging, quality control assessments to arranging final delivery of the products.\n\nWe have now expanded our work from Laptop Backpacks and Travel Bags to Jackets and corporate uniform wear.  We proudly  cater to customers from all over Bangladesh to launch and grow their businesses/brands, especially those in the fashion industry.', 'We believe in treating our workforce with respect and empowering them to produce products of a high standard and quality and with pride for the brand we have built together with them.  We put great emphasis on providing our clients with the same appreciation and freedom to choose how they make their merchandise for their brands to flourish. The ultimate goal is to be our clients\' consistently reliable partner.', 'RMS aims to provide hassle free customer experience to our clients with proper sourcing, designing and production. We believe in attention to detail so that our customers\' dreams can be fulfilled as promised with high quality and efficient timelines.', 'To create a safe and friendly working environment within the company that transcends into the quality of our product as a result, making us a trustworthy, reliable partner.\n\nWe put our people first and foremost, and we believe it is our unity and healthy working culture that will put us at the forefront of this industry.');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL,
  `admin_forget_password_url_params` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `admin_email`, `admin_password`, `admin_forget_password_url_params`) VALUES
(3, 'safi.rmscorpbd@gmail.com', '123456', '');

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `album_id` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `album_thumbnail` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`album_id`, `album_name`, `album_thumbnail`) VALUES
(75, 'demo', 'public/images/2021-07-08T18-53-41.114Z-Background copy.png');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_image`) VALUES
(156, 'BACKPACK', 'public/images/2021-09-15T07-06-42.674Z-RBP_003.jpg'),
(157, 'DELIVERY BAG ', 'public/images/2021-09-15T07-15-26.401Z-RDB_001.jpg'),
(158, 'SPORTS BAG', 'public/images/2021-09-15T07-15-45.550Z-RSB_00221.jpg'),
(159, 'SCHOOL BAG', 'public/images/2021-09-15T07-15-58.757Z-RSB_00111.jpg'),
(160, 'GYM BAG', 'public/images/2021-09-15T07-16-14.848Z-RGB_001.jpg'),
(161, 'SIDE BAG', 'public/images/2021-09-15T07-16-31.255Z-RSB_001.jpg'),
(162, 'SLEEVE BAG', 'public/images/2021-09-15T07-16-47.793Z-RSB_00331.jpg'),
(163, 'TRAVEL BAG', 'public/images/2021-09-15T07-17-13.041Z-RTB_001.jpg'),
(164, 'TOOL BAG', 'public/images/2021-09-15T07-17-26.083Z-RTB_00441.jpg'),
(165, 'BIKER BAG', 'public/images/2021-09-15T07-17-40.406Z-RBB_001.jpg'),
(166, 'LADIES BAG', 'public/images/2021-09-19T07-17-29.721Z-RLB_001.jpg'),
(167, 'KIDS BAG', 'public/images/2021-09-18T11-38-43.348Z-RKB_001.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `phone` text NOT NULL,
  `email` text NOT NULL,
  `facebook` text NOT NULL,
  `google_plus` text NOT NULL,
  `twitter` text NOT NULL,
  `whatsapp` text NOT NULL,
  `youtube` text NOT NULL,
  `instagram` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `address`, `phone`, `email`, `facebook`, `google_plus`, `twitter`, `whatsapp`, `youtube`, `instagram`) VALUES
(1, 'House 29 (Ground Floor), Road #1 Dhanmondi, Dhaka, Bangladesh', '+088 1842 576647, +088 1678 138635', 'info@rmscorpbd.com', 'https://www.facebook.com/rmscorpbd', 'http://www.google.com', '   https://www.twitter.com', '   https://www.whatsapp.com', '   https://www.youtube.com', '   https://www.instagram.com');

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE `director` (
  `director_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `director`
--

INSERT INTO `director` (`director_id`, `name`, `designation`, `image`) VALUES
(78, 'Ummah Nazia Rasha Khan', 'MANAGING PARTNER', 'public/images/2021-09-15T05-45-47.361Z-Rasha Khan.jpg'),
(79, 'Jashim Uddin Ahmed Khan', 'CHAIRMAN', 'public/images/2021-09-15T05-45-38.241Z-Chairman.jpg'),
(80, 'SM Shakib Hasan', 'CHIEF EXECUTIVE OFFICER', 'public/images/2021-09-15T05-34-06.215Z-CEO.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `header_slider`
--

CREATE TABLE `header_slider` (
  `id` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `header_slider`
--

INSERT INTO `header_slider` (`id`, `image`) VALUES
(23, 'public/images/2021-09-14T09-51-39.663Z-Home Page Slider-01.jpg'),
(25, 'public/images/2021-09-15T06-10-55.065Z-Home Page Slider-03.jpg'),
(29, 'public/images/2021-09-15T07-00-57.378Z-Home Page Slider-02.jpg'),
(30, 'public/images/2021-09-15T07-01-43.256Z-Home Page Slider-04.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `name`, `email`, `contact`, `message`) VALUES
(38, 'shatu', 'mahbub.shatu@gmail.com', '01722981111', 'hi'),
(39, 'Rasha Khan', 'rasha.khan@rmscorpbd.com', '01794202257', 'HI'),
(40, 'safi', 'safisami1999@gmail.com', '01747971177', 'HI ');

-- --------------------------------------------------------

--
-- Table structure for table `new_arrival`
--

CREATE TABLE `new_arrival` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_arrival`
--

INSERT INTO `new_arrival` (`id`, `name`, `image`) VALUES
(73, 'LADIES BAG ', 'public/images/2021-09-15T07-12-31.218Z-3.jpg'),
(74, 'BACKPACK', 'public/images/2021-09-15T07-12-44.824Z-1-01.jpg'),
(75, 'KIDS BAG', 'public/images/2021-09-15T07-12-58.456Z-2.jpg'),
(76, 'SCHOOL BAG ', 'public/images/2021-09-15T07-13-10.288Z-4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `other`
--

CREATE TABLE `other` (
  `id` int(11) NOT NULL,
  `footerShortDesc` text NOT NULL,
  `slogan` text NOT NULL,
  `heading` text NOT NULL,
  `headerParagraph` text NOT NULL,
  `location_and_area` text DEFAULT NULL,
  `facilities` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `other`
--

INSERT INTO `other` (`id`, `footerShortDesc`, `slogan`, `heading`, `headerParagraph`, `location_and_area`, `facilities`) VALUES
(1, 'We customize bags, backpacks for our clients in their glorious brands and preferences.', 'Your Best Local Bag Service', 'BAG MANUFACTURING SERVICE IN BANGLADESH', 'Bags and Backpacks at factory price with features and functions that serves your best interest.', 'Our manufacturing facility is located at Hazaribagh on the Beribaad highway. We are currently working on a single floor consisting of two units with 60 skilled workers to produce quality products at par with the international standard for the Bangladesh market. ', 'Our factory currently boasts 42 machines with advanced technology to help increase the production in lesser time. These machines not only saves our production time but gives a fine finishing and accurate output of the bag that makes the quality par to none in the existing market. We are adamant to bring in good quality fabrics, accessories and branding ideas for our clientele to create interesting colorful backpacks for corporate companies and brands. \n');

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `photo_id` int(11) NOT NULL,
  `albm_id` int(11) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`photo_id`, `albm_id`, `photo`) VALUES
(227, 68, 'public/images/2021-04-29T07-15-29.392Z-_DSC0966.JPG'),
(228, 68, 'public/images/2021-04-29T07-15-29.471Z-_DSC1255.JPG'),
(229, 68, 'public/images/2021-04-29T07-15-39.642Z-_DSC1067.JPG'),
(230, 68, 'public/images/2021-04-29T07-15-34.034Z-_DSC0966.JPG'),
(231, 68, 'public/images/2021-04-29T07-15-44.409Z-_DSC1255.JPG'),
(232, 68, 'public/images/2021-04-29T07-15-51.177Z-_DSC1067.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `product_no` varchar(255) NOT NULL,
  `primary_material` varchar(255) NOT NULL,
  `dimension` varchar(255) NOT NULL,
  `warrenty` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `product_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `cat_id`, `product_no`, `primary_material`, `dimension`, `warrenty`, `price`, `product_image`) VALUES
(65, 156, 'RBP_001', '220d Nylon Oxford fabric', '17\" X 12.5\" X 5.5\"', '', '', 'public/images/2021-09-15T07-26-57.438Z-RBP_001.jpg'),
(66, 156, 'RBP_002', 'Cardura Nylon Fabric', '17.5” X 13.5” X 4”', '', '', 'public/images/2021-09-15T07-30-04.166Z-RBP_002.jpg'),
(67, 156, 'RBP_003', '220d Nylon Oxford fabric', '17.5” X 14” X 4.5”', '', '', 'public/images/2021-09-15T07-30-48.976Z-RBP_003.jpg'),
(68, 156, 'RBP_004', 'Dubai Oxford Fabric ', '18\" X 12.5\" X 5.5\"', '', '', 'public/images/2021-09-15T07-52-04.445Z-RBP_004.jpg'),
(69, 156, 'RBP_005', '220d Nylon Oxford fabric', '17.5” X 14” X 4.5”', '', '', 'public/images/2021-09-15T07-54-03.141Z-RBP_005.jpg'),
(70, 156, 'RBP_006', 'Cardura Nylon Fabric', '17.5” X 14” X 4.5”', '', '', 'public/images/2021-09-15T07-54-52.567Z-RBP_006.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `quotation`
--

CREATE TABLE `quotation` (
  `quotation_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `interested_item` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quotation`
--

INSERT INTO `quotation` (`quotation_id`, `name`, `contact`, `email`, `interested_item`, `quantity`) VALUES
(59, 'shayanno', '01781448218', 'shaya@gmail.com', 'Ladis bag', '51'),
(60, 'Rasha Khan', '01794202257', 'unr.khan@gmail.com', '', '100');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `services` text NOT NULL,
  `bagAndApparel` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `services`, `bagAndApparel`) VALUES
(1, 'We provide One-Stop Solution for creating your dream bag brand. Additionally we also work with multiple factories and import items supplying to Bangladesh Military Organization.', 'We specialize in manufacturing and supplying bags and computer cases to many leading companies. We make all kinds of bags with different features and functionality which includes backpacks, laptop bags, carry bags, messenger bags, camera bags, sports bags, etc. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`album_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `director`
--
ALTER TABLE `director`
  ADD PRIMARY KEY (`director_id`);

--
-- Indexes for table `header_slider`
--
ALTER TABLE `header_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `new_arrival`
--
ALTER TABLE `new_arrival`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `other`
--
ALTER TABLE `other`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`photo_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `quotation`
--
ALTER TABLE `quotation`
  ADD PRIMARY KEY (`quotation_id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `album_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `director`
--
ALTER TABLE `director`
  MODIFY `director_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `header_slider`
--
ALTER TABLE `header_slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `new_arrival`
--
ALTER TABLE `new_arrival`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `other`
--
ALTER TABLE `other`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `quotation`
--
ALTER TABLE `quotation`
  MODIFY `quotation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
