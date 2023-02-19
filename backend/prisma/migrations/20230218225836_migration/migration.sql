/*
  Warnings:

  - Added the required column `com_id_post` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `com_id_post` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `comment_com_id_post_idx` ON `comment`(`com_id_post`);
