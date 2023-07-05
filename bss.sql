
CREATE TABLE `device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `MAC` varchar(255) NOT NULL,
  `IP` varchar(255) NOT NULL,
  `created` date NOT NULL,
  `consumption` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;


INSERT INTO `device` (`id`, `name`, `MAC`, `IP`, `created`, `consumption`) VALUES
(1, 'TV', '00:1B:44:11:3B:B7', '127.0.0.1', '2021-11-03', 40),
(2, 'Washer', '00:1B:44:11:3A:B8', '127.0.0.3', '2021-05-31', 50),
(3, 'Refrigerator', '00:1B:44:11:3A:B9', '127.0.0.4', '2021-05-31', 80),
(4, 'Selling Fan', '00:1B:44:11:3A:B2', '127.0.0.5', '2021-05-31', 100);


CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;


INSERT INTO `logs` (`id`, `name`, `action`, `created`) VALUES
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

