import { defineConfig } from "drizzle-kit";
import env from "./src/env.ts";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",

  out: "./db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
