CREATE TABLE `njsp_settings` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`key` varchar(256) NOT NULL,
	`name` varchar(256) NOT NULL,
	`content` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_settings_id` PRIMARY KEY(`id`),
	CONSTRAINT `key_idx` UNIQUE(`key`)
);
