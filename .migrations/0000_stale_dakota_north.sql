CREATE TABLE `njsp_admin_passwords` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`admin_id` bigint NOT NULL,
	`password` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_admin_passwords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `njsp_admins` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_admins_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_idx` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `njsp_services` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(256) NOT NULL,
	`description` varchar(256) NOT NULL,
	`icon` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `njsp_services_id` PRIMARY KEY(`id`)
);
