-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191),
    `email` VARCHAR(191),
    `password` VARCHAR(191),
    `status` BOOLEAN NOT NULL,

    UNIQUE INDEX `user.username_unique`(`username`),
    UNIQUE INDEX `user.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
