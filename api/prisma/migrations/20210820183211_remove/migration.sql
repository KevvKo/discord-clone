/*
  Warnings:

  - You are about to alter the column `createdAt` on the `channel` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `createdAt` on the `privateChat` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `createdAt` on the `publicChat` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `birthday` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `channel` MODIFY `createdAt` TIMESTAMP;

-- AlterTable
ALTER TABLE `privateChat` MODIFY `createdAt` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `publicChat` MODIFY `createdAt` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthday`;
