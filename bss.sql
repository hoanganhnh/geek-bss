-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2021 lúc 10:00 PM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bss`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `device`
--

CREATE TABLE `device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `MAC` varchar(255) NOT NULL,
  `IP` varchar(255) NOT NULL,
  `crdate` date NOT NULL,
  `consumption` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;

--
-- Đang đổ dữ liệu cho bảng `device`
--

INSERT INTO `device` (`id`, `name`, `MAC`, `IP`, `crdate`, `consumption`) VALUES
(1, 'TV', '00:1B:44:11:3B:B7', '127.0.0.1', '2021-11-03', 40),
(2, 'Washer', '00:1B:44:11:3A:B8', '127.0.0.3', '2021-05-31', 50),
(3, 'Refrigerator', '00:1B:44:11:3A:B9', '127.0.0.4', '2021-05-31', 80),
(4, 'Selling Fan', '00:1B:44:11:3A:B2', '127.0.0.5', '2021-05-31', 100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `crdate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;

--
-- Đang đổ dữ liệu cho bảng `logs`
--

INSERT INTO `logs` (`id`, `name`, `action`, `crdate`) VALUES
(1, 'TV', 'Turn On', '2021-06-03'),
(5, 'TV', 'Turn On', '2021-06-03'),
(9, 'TV', 'Turn On', '2021-06-03'),
(15, 'Washer', 'Sleep', '2021-06-09'),
(16, 'Selling Fan', 'Turn On', '2021-09-03'),
(18, 'Selling Fan', 'Turn On', '2021-06-10'),
(19, 'Washer', 'Turn On', '2021-08-08'),
(21, 'Refregerator', 'Turn On', '2021-06-12'),
(23, 'Washer', 'Sleep', '2021-06-09'),
(24, 'Selling Fan', 'Turn On', '2021-09-03'),
(26, 'Selling Fan', 'Turn On', '2021-06-10'),
(27, 'Washer', 'Turn On', '2021-08-08'),
(29, 'Refregerator', 'Turn On', '2021-06-12'),
(30, 'Washer', 'Turn On', '2021-08-08'),
(32, 'Refregerator', 'Turn On', '2021-06-12'),
(34, 'Washer', 'Sleep', '2021-06-09'),
(35, 'Selling Fan', 'Turn On', '2021-09-03'),
(37, 'Selling Fan', 'Turn On', '2021-06-10'),
(38, 'Washer', 'Turn On', '2021-08-08'),
(40, 'Refregerator', 'Turn On', '2021-06-12'),
(42, 'Washer', 'Sleep', '2021-06-09'),
(43, 'Selling Fan', 'Turn On', '2021-09-03'),
(45, 'Selling Fan', 'Turn On', '2021-06-10');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `MAC` (`MAC`);

--
-- Chỉ mục cho bảng `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `device`
--
ALTER TABLE `device`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
