/*
  Warnings:

  - Added the required column `conversation_id` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `messages` ADD COLUMN `conversation_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Messages` ADD FOREIGN KEY (`conversation_id`) REFERENCES `Conversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
