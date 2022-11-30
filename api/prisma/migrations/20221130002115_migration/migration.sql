-- DropIndex
DROP INDEX `users_use_email_key` ON `users`;

-- CreateIndex
CREATE INDEX `files_fil_id_post_idx` ON `files`(`fil_id_post`);

-- CreateIndex
CREATE INDEX `posts_pos_id_user_idx` ON `posts`(`pos_id_user`);
