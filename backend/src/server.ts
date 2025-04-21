import { serve } from "@hono/node-server";
import { Hono } from "hono";
import loginRoute from "./controller/auth/loginRoute.js";

const app = new Hono();
app.all("/", (c) => {
  return c.text("Hello");
});
app.route("/auth", loginRoute);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
