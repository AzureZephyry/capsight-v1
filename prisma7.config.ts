import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

// Node loads the same ignored local file for Prisma CLI commands that Next.js
// reads at runtime. An explicitly supplied environment variable takes priority.
if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  loadEnvFile(".env.local");
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
