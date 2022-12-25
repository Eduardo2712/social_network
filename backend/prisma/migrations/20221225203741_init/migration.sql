/*
  Warnings:

  - You are about to drop the column `use_email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `use_password` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `use_email`,
    DROP COLUMN `use_password`,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL;
