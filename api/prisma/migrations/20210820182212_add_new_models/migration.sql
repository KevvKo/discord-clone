-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191),
    `email` VARCHAR(191),
    `password` VARCHAR(191),

    UNIQUE INDEX `user.username_unique`(`username`),
    UNIQUE INDEX `user.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `channel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `createdAt` TIMESTAMP,
    `createdBy` INTEGER,

    UNIQUE INDEX `channel.createdBy_unique`(`createdBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `privateChat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `publicChat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `channelId` INTEGER NOT NULL,
    `createdAt` TIMESTAMP NOT NULL,

    UNIQUE INDEX `publicChat.channelId_unique`(`channelId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participiants` (
    `userId` INTEGER NOT NULL,
    `chatId` INTEGER NOT NULL,

    UNIQUE INDEX `participiants.userId_unique`(`userId`),
    UNIQUE INDEX `participiants.chatId_unique`(`chatId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chatId` INTEGER,
    `text` VARCHAR(191) NOT NULL,
    `writtenBy` INTEGER,
    `writtenIn` INTEGER,

    UNIQUE INDEX `messages.chatId_unique`(`chatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
