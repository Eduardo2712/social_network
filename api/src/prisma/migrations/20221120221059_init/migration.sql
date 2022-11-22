/*
  Warnings:

  - Added the required column `use_password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `use_password` VARCHAR(255) NOT NULL;
