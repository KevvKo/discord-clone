/*
  Warnings:

  - You are about to drop the column `title` on the `conversation` table. All the data in the column will be lost.
  - You are about to drop the column `written_in` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the `participiants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `participiants` DROP FOREIGN KEY `participiants_ibfk_2`;

-- DropForeignKey
ALTER TABLE `participiants` DROP FOREIGN KEY `participiants_ibfk_1`;

-- AlterTable
ALTER TABLE `conversation` DROP COLUMN `title`;

-- AlterTable
ALTER TABLE `messages` DROP COLUMN `written_in`;

-- DropTable
DROP TABLE `participiants`;
