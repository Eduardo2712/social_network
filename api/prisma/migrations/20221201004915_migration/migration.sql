-- DropIndex
DROP INDEX `users_use_id_photo_key` ON `users`;

-- CreateIndex
CREATE INDEX `users_use_id_photo_idx` ON `users`(`use_id_photo`);
