/*
  Warnings:

  - Added the required column `fil_path` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `files` ADD COLUMN `fil_path` VARCHAR(255) NOT NULL;
