import { zValidator } from "@hono/zod-validator";
import { createSelectSchema } from "drizzle-zod";
import { Hono } from "hono";
import type { User } from "@/db/schema.js";
import { z } from "zod";
import { userSchema } from "@/db/zodSchemas.js";

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
