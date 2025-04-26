import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { userSchema } from "@/database/zodSchema";
import db from "@/database/index";
import { compare } from "bcrypt";
import { usersTable } from "@/database/schema/user";
import { eq } from "drizzle-orm";

const saltRounds = 10;

const loginRoute = new Hono();

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

loginRoute.post("/login", zValidator("json", loginSchema), async (c) => {
  const { email, password } = c.req.valid("json");
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (!user) return c.json({ ok: false, message: "User not found" }, 404);

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return c.json({ ok: false, message: "Invalid credentials" }, 401);
  }

  return c.json({ ok: true, message: "user successfully logged in" }, 200);
});

export default loginRoute;
