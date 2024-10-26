-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publicationDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "edition" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
