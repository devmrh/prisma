# Migration `20200711175609-new-table`

This migration has been generated by mohammadreza at 7/11/2020, 5:56:09 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `prisma`.`Profile` DROP FOREIGN KEY `Profile_ibfk_1`

ALTER TABLE `prisma`.`Post` ADD COLUMN `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
ADD COLUMN `updatedAt` datetime(3) NOT NULL  ,
ALTER COLUMN `published` DROP DEFAULT;

DROP TABLE `prisma`.`Profile`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200710131159-add-profile..20200711175609-new-table
--- datamodel.dml
+++ datamodel.dml
@@ -4,31 +4,27 @@
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
+
 model User {
-  id    Int     @default(autoincrement()) @id
+  id    Int     @id @default(autoincrement())
   email String  @unique
   name  String?
   posts Post[]
 }
 model Post {
-  id        Int     @default(autoincrement()) @id
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  published Boolean
+  title     String
+  content   String?
   authorId  Int?
-  content   String?
-  published Boolean @default(false)
-  title     String
   author    User?   @relation(fields: [authorId], references: [id])
-}
-model Profile {
-  id Int @default(autoincrement()) @id
-  userId Int?
-  bio String
-  website String
-  user User?  @relation(fields: [userId], references: [id])
 }
```

