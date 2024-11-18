import { Hono } from "hono";
import { createPalindromeHistory } from "./actions/palindromeHistoryActions.js";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
const app = new Hono();
function checkPalindrome(input) {
    const cleanedInput = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let start = 0;
    let end = cleanedInput.length - 1;
    while (start < end) {
        if (cleanedInput[start] !== cleanedInput[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
const palindromeInputSchema = z.object({
    input: z.string().min(1, "Input cannot be empty"),
});
app.post("/check-palindrome", zValidator("json", palindromeInputSchema), async (c) => {
    const data = c.req.valid("json");
    const isPalindrome = checkPalindrome(data.input);
    const result = await createPalindromeHistory({
        input: data.input,
        isPalindrome,
    });
    return c.json({
        input: data.input,
        isPalindrome,
        result,
    });
});
export default app;
