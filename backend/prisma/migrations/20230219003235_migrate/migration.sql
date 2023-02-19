/*
  Warnings:

  - You are about to drop the column `cfi_id_post` on the `comment_file` table. All the data in the column will be lost.
  - Added the required column `cfi_id_comment` to the `comment_file` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `comment_file_cfi_id_post_idx` ON `comment_file`;

-- AlterTable
ALTER TABLE `comment_file` DROP COLUMN `cfi_id_post`,
    ADD COLUMN `cfi_id_comment` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `comment_file_cfi_id_comment_idx` ON `comment_file`(`cfi_id_comment`);
