CREATE TABLE `njsp_soft_skills` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_soft_skills_id` PRIMARY KEY(`id`)
);
