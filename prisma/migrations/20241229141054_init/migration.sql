-- CreateTable
CREATE TABLE `waka` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bodyKanji` VARCHAR(191) NOT NULL,
    `bodyKana` VARCHAR(191) NOT NULL,
    `nameKanji` VARCHAR(191) NOT NULL,
    `nameKana` VARCHAR(191) NOT NULL,
    `kimariji` VARCHAR(191) NOT NULL,
    `imageWref` VARCHAR(191) NOT NULL,
    `imageURL` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
