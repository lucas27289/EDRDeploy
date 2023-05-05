-- CreateTable
CREATE TABLE "_UserToVideos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_UserToVideos_A_fkey" FOREIGN KEY ("A") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserToVideos_B_fkey" FOREIGN KEY ("B") REFERENCES "Videos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToVideos_AB_unique" ON "_UserToVideos"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToVideos_B_index" ON "_UserToVideos"("B");
