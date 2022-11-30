-- AlterTable
ALTER TABLE `users` ADD COLUMN `use_date_status` DATETIME(3) NULL,
    ADD COLUMN `use_delete` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `use_text_status` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pos_id_user` INTEGER NOT NULL,
    `pos_text` VARCHAR(255) NOT NULL,
    `pos_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fil_id_post` INTEGER NOT NULL,
    `fil_size` INTEGER NOT NULL,
    `fil_name` VARCHAR(255) NOT NULL,
    `fil_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
