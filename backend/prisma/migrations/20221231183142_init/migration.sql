/*
  Warnings:

  - You are about to drop the `file` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `file`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `use_id_type_user` INTEGER NOT NULL,
    `use_id_photo` INTEGER NOT NULL,
    `use_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `use_phone` VARCHAR(255) NOT NULL,
    `use_birth_data` DATETIME(3) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `use_date_status` DATETIME(3) NULL,
    `use_delete` BOOLEAN NOT NULL DEFAULT false,
    `use_text_status` VARCHAR(500) NULL,

    INDEX `Users_use_id_photo_idx`(`use_id_photo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pos_id_user` INTEGER NOT NULL,
    `pos_text` VARCHAR(500) NOT NULL,
    `pos_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Posts_pos_id_user_idx`(`pos_id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts_Files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pfi_id_post` INTEGER NOT NULL,
    `pfi_id_file` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Posts_Files_pfi_id_post_idx`(`pfi_id_post`),
    INDEX `Posts_Files_pfi_id_file_idx`(`pfi_id_file`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fil_id_post` INTEGER NULL,
    `fil_size` INTEGER NOT NULL,
    `fil_name` VARCHAR(255) NOT NULL,
    `fil_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fil_path` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
