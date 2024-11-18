import db from "../db/index.js";
import { palindromeHistoryTable } from "../db/schema.js";
export async function createPalindromeHistory(data) {
    return db.insert(palindromeHistoryTable).values(data).returning();
}
