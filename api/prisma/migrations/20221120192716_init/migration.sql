-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `use_id_type_user` INTEGER NOT NULL,
    `use_name` VARCHAR(255) NOT NULL,
    `use_email` VARCHAR(255) NOT NULL,
    `use_phone` VARCHAR(255) NOT NULL,
    `use_birth_data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_use_email_key`(`use_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
