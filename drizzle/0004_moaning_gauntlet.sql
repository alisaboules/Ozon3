CREATE TABLE `user_profile` (
	`user_id` text PRIMARY KEY NOT NULL,
	`full_name` text,
	`birth_date` text,
	`gender` text,
	`phone` text,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
