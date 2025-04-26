import { serve } from "@hono/node-server";
import { Hono } from "hono";
import loginRoute from "./controller/auth/login";
import signupRoute from "./controller/auth/signup";
import { cors } from "hono/cors";
import env from "~/env.js";

const app = new Hono();

// allow only the allowed sites
app.use("*", async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: env.CORS_ORIGIN,
  });
  return corsMiddlewareHandler(c, next);
});

app.all("/", (c) => {
  return c.json({ status: "OK", message: "API is live" });
});

app.route("/auth", loginRoute);
app.route("/auth", signupRoute);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://0.0.0.0:${info.port}`);
  }
);
