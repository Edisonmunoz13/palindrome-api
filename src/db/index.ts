import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import env from "../env.js";
import { palindromeHistoryTable } from "./schema.js";

const db = drizzle(postgres(env.DATABASE_URL), {
  schema: { palindromeHistoryTable },
});

export default db;
