import { sql } from "drizzle-orm";
import { pgTable, text, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

export const palindromeHistoryTable = pgTable("palindrome_history", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`)
    .notNull(),
  input: text("input").notNull(),
  isPalindrome: boolean("is_palindrome").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
