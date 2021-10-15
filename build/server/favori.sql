-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `categories` (`id`, `name`, `parent_id`) VALUES
(1,	'Men',	NULL),
(2,	'Women',	NULL),
(3,	'Suit',	1),
(4,	'Dress',	2);

DROP TABLE IF EXISTS `order_products`;
CREATE TABLE `order_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `size` text,
  `color` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `order_products` (`id`, `order_id`, `product_id`, `quantity`, `size`, `color`) VALUES
(1,	1,	1,	7,	'large',	'white'),
(2,	2,	1,	7,	'large',	'white'),
(3,	3,	1,	7,	'large',	'white'),
(4,	4,	1,	6,	'medium',	'yellow');

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `season_id` int DEFAULT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `price` decimal(10,2) DEFAULT NULL,
  `colors` text,
  `sizes` text,
  `min_order` int DEFAULT NULL,
  `trending` int DEFAULT '0',
  `recommended` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`, `category_id`, `season_id`, `image`, `name`, `description`, `price`, `colors`, `sizes`, `min_order`, `trending`, `recommended`) VALUES
(1,	4,	1,	'1.jpg',	'White dress',	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio assumenda alias aliquid voluptatibus pariatur iste, consequatur, atque explicabo tenetur ut nulla omnis error incidunt sed dolores? Sed quas quod error! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio assumenda alias aliquid voluptatibus pariatur iste, consequatur, atque explicabo tenetur ut nulla omnis error incidunt sed dolores? Sed quas quod error!\r\n\r\n',	80.00,	'white,yellow,red',	'large,medium,small',	5,	1,	1);

DROP TABLE IF EXISTS `seasons`;
CREATE TABLE `seasons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `seasons` (`id`, `name`) VALUES
(1,	'Spring'),
(2,	'Summer'),
(3,	'Winter'),
(4,	'Autumn');

DROP TABLE IF EXISTS `user_orders`;
CREATE TABLE `user_orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `name` text,
  `phone` text,
  `address` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user_orders` (`id`, `user_id`, `name`, `phone`, `address`) VALUES
(1,	14,	'q',	'q',	'Ajniha, Chowaifet, Lebanon'),
(2,	14,	'q',	'q',	'Ajniha, Chowaifet, Lebanon'),
(3,	14,	'q',	'q',	'Ajniha, Chowaifet, Lebanon'),
(4,	14,	'q',	'q',	'Ajniha, Chowaifet, Lebanon');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `phone` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `address`, `token`) VALUES
(14,	'q',	'8e35c2cd3bf6641bdb0e2050b76932cbb2e6034a0ddacc1d9bea82a6ba57f7cf',	'q',	'921234',	'Ajniha, Chowaifet, Lebanon12',	'');

-- 2021-10-15 18:47:48
