-- CreateTable
CREATE TABLE "user" (
    "userId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL, 
    "lastName" TEXT NOT NULL, 
    "address" TEXT NOT NULL,  
    "phone" TEXT NOT NULL,    
    "email" TEXT NOT NULL,    
    "password" TEXT NOT NULL,  

    PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "product" (
    "productId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL, 
    "price" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,
    "description" TEXT NOT NULL, 
    "createdAt"  DATETIME TIMESTAMP, 

    PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "catergory" (
    "category_name" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
);

-- CreateTable
CREATE TABLE "buysell" (
    "purchaseId" SERIAL NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    PRIMARY KEY ("authorId")
);

-- CreateTable
CREATE TABLE "rent" (
    "rentId" SERIAL NOT NULL,
    "ownerID" INTEGER NOT NULL,
    "renterId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    PRIMARY KEY ("rentId")
);

-- AddForeignKey
ALTER TABLE "product" ADD FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE;