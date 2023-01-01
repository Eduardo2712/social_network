/*
  Warnings:

  - You are about to drop the `postfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `postfile`;

-- CreateTable
CREATE TABLE `post_file` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pfi_id_post` INTEGER NOT NULL,
    `pfi_id_file` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `post_file_pfi_id_post_idx`(`pfi_id_post`),
    INDEX `post_file_pfi_id_file_idx`(`pfi_id_file`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `post` RENAME INDEX `Post_pos_id_user_idx` TO `post_pos_id_user_idx`;

-- RenameIndex
ALTER TABLE `user` RENAME INDEX `User_use_id_photo_idx` TO `user_use_id_photo_idx`;
