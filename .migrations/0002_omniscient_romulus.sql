CREATE TABLE `njsp_experiences` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`institute` varchar(256) NOT NULL,
	`year` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_experiences_id` PRIMARY KEY(`id`)
);
