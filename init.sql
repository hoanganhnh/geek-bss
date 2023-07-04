CREATE TABLE IF NOT EXISTS `Device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

CREATE TABLE `Log` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `created` date NOT NULL,
  FULLTEXT(`action`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Log` (`id`, `name`, `action`, `created`) VALUES
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
