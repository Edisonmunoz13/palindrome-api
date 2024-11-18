import db from "../db/index.js";
import { palindromeHistoryTable } from "../db/schema.js";

export async function createPalindromeHistory(data: {
  input: string;
  isPalindrome: boolean;
}) {
  return db.insert(palindromeHistoryTable).values(data).returning();
}
