-- CreateTable
CREATE TABLE "waka" (
    "id" SERIAL NOT NULL,
    "bodyKanji" TEXT NOT NULL,
    "bodyKana" TEXT NOT NULL,
    "nameKanji" TEXT NOT NULL,
    "nameKana" TEXT NOT NULL,
    "kimariji" TEXT NOT NULL,
    "imageWref" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "waka_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
