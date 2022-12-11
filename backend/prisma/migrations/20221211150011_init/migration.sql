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
    `use_password` VARCHAR(255) NOT NULL,
    `use_date_status` DATETIME(3) NULL,
    `use_delete` BOOLEAN NOT NULL DEFAULT false,
    `use_text_status` VARCHAR(500) NULL,
    `use_id_photo` INTEGER NULL,

    INDEX `users_use_id_photo_idx`(`use_id_photo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pos_id_user` INTEGER NOT NULL,
    `pos_text` VARCHAR(500) NOT NULL,
    `pos_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `posts_pos_id_user_idx`(`pos_id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fil_id_post` INTEGER NULL,
    `fil_size` INTEGER NOT NULL,
    `fil_name` VARCHAR(255) NOT NULL,
    `fil_delete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fil_path` VARCHAR(255) NOT NULL,

    INDEX `files_fil_id_post_idx`(`fil_id_post`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
