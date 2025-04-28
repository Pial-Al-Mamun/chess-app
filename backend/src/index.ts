import { serve } from "@hono/node-server";
import { Hono } from "hono";
import loginRoute from "./controller/auth/login";
import signupRoute from "./controller/auth/signup";
import { cors } from "hono/cors";
import env from "env";
import { prettyJSON } from "hono/pretty-json";
const app = new Hono();

// allow only the allowed sites
app.use("*", async (c, next) => {
  const corsMiddlewareHandler = cors({
    origin: process.env.NODE_ENV === "production" ? env.CORS_ORIGIN : "*",
  });
  return corsMiddlewareHandler(c, next);
});

app.use(prettyJSON({ space: 4 }));

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
