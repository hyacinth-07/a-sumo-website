-- CreateTable
CREATE TABLE "Rikishi" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Rikishi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rikishi_id_key" ON "Rikishi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rikishi_name_key" ON "Rikishi"("name");
