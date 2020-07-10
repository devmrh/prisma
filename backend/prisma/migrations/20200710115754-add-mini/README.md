# Migration `20200710115754-add-mini`

This migration has been generated by mohammadreza at 7/10/2020, 11:57:54 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `prisma`.`User` (
`email` varchar(191) NOT NULL  ,
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `prisma`.`Post` (
`authorId` int  ,
`content` varchar(191)   ,
`id` int NOT NULL  AUTO_INCREMENT,
`published` boolean NOT NULL DEFAULT false ,
`title` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `prisma`.`Mini` (
`bio` varchar(191) NOT NULL  ,
`id` int NOT NULL  AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `prisma`.`User`(`email`)

ALTER TABLE `prisma`.`Post` ADD FOREIGN KEY (`authorId`) REFERENCES `prisma`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200710115754-add-mini
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,31 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+model User {
+  id    Int     @default(autoincrement()) @id
+  email String  @unique
+  name  String?
+  posts Post[]
+}
+
+model Post {
+  id        Int     @default(autoincrement()) @id
+  authorId  Int?
+  content   String?
+  published Boolean @default(false)
+  title     String
+  author    User?   @relation(fields: [authorId], references: [id])
+}
+
+
+model Mini {
+  id Int @default(autoincrement()) @id
+  bio String
+}
```

