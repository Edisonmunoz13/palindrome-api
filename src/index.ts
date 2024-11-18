import dotenv from "dotenv";
dotenv.config();

import { serve } from "@hono/node-server";
import app from "./app.js";
import env from "./env.js";

serve({ hostname: env.HOST, fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`Listening on http://${info.address}:${info.port}`);
});
