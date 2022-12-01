/*
  Warnings:

  - You are about to drop the column `fil_id_user` on the `files` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[use_id_photo]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `files_fil_id_user_key` ON `files`;

-- AlterTable
ALTER TABLE `files` DROP COLUMN `fil_id_user`;

-- CreateIndex
CREATE UNIQUE INDEX `users_use_id_photo_key` ON `users`(`use_id_photo`);
