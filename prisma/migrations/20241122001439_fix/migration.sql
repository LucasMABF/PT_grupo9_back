/*
  Warnings:

  - Added the required column `conteudo` to the `Comentario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "avaliacaoId" INTEGER NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comentario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentario_avaliacaoId_fkey" FOREIGN KEY ("avaliacaoId") REFERENCES "Avaliacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentario" ("avaliacaoId", "createdAt", "id", "updatedAt", "userId") SELECT "avaliacaoId", "createdAt", "id", "updatedAt", "userId" FROM "Comentario";
DROP TABLE "Comentario";
ALTER TABLE "new_Comentario" RENAME TO "Comentario";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
