import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { userSchema } from "@/db/zodSchemas.js";
import { db } from "@/db/index.js";

const loginRoute = new Hono();

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

loginRoute.post("/login", zValidator("json", loginSchema), async (c) => {
  const { email, password } = c.req.valid("json");

  return c.json({ ok: true, message: "bomboclat" }, 200);
});

export default loginRoute;
