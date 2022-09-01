-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wallet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "balance" INTEGER
);
INSERT INTO "new_Wallet" ("address", "balance", "id") SELECT "address", "balance", "id" FROM "Wallet";
DROP TABLE "Wallet";
ALTER TABLE "new_Wallet" RENAME TO "Wallet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
