/*
  Warnings:

  - You are about to drop the column `use_birth_data` on the `user` table. All the data in the column will be lost.
  - Added the required column `use_date_birth` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `use_birth_data`,
    ADD COLUMN `use_date_birth` DATETIME(3) NOT NULL;
