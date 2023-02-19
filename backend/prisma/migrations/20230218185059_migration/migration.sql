/*
  Warnings:

  - Added the required column `use_id_address` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `use_id_address` INTEGER NOT NULL,
    MODIFY `use_id_photo` INTEGER NULL;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `add_cep` VARCHAR(255) NOT NULL,
    `add_street` VARCHAR(255) NOT NULL,
    `add_number` VARCHAR(255) NOT NULL,
    `add_district` VARCHAR(255) NOT NULL,
    `add_complement` VARCHAR(255) NULL,
    `add_city` VARCHAR(255) NOT NULL,
    `add_state` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `com_id_user` INTEGER NOT NULL,
    `com_text` VARCHAR(500) NOT NULL,
    `com_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `comment_com_id_user_idx`(`com_id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comment_file` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cfi_id_post` INTEGER NOT NULL,
    `cfi_id_file` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `comment_file_cfi_id_post_idx`(`cfi_id_post`),
    INDEX `comment_file_cfi_id_file_idx`(`cfi_id_file`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `user_use_id_type_user_idx` ON `user`(`use_id_type_user`);

-- CreateIndex
CREATE INDEX `user_use_id_address_idx` ON `user`(`use_id_address`);
