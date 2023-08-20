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
ALTER TABLE `njsp_admin_passwords` ADD CONSTRAINT `njsp_admin_passwords_admin_id_njsp_admins_id_fk` FOREIGN KEY (`admin_id`) REFERENCES `njsp_admins`(`id`) ON DELETE no action ON UPDATE no action;