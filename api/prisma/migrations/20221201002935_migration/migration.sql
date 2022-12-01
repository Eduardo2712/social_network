/*
  Warnings:

  - A unique constraint covering the columns `[fil_id_user]` on the table `files` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `files` ADD COLUMN `fil_id_user` INTEGER NULL,
    MODIFY `fil_id_post` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `use_id_photo` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `files_fil_id_user_key` ON `files`(`fil_id_user`);
