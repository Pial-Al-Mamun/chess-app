import { hash } from "bcrypt";
import db from "@/database/index";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signupSchema } from "@/database/zod-schema";
import { usersTable } from "@/database/schema/user";
import { eq } from "drizzle-orm";

const signupRoute = new Hono();
const saltRounds = 10;

signupRoute.get("/signup", zValidator("json", signupSchema), async (c) => {
  const { email, password, username } = c.req.valid("json");

  const doesUserExist = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (doesUserExist)
    return c.json({ ok: false, message: "Email already registered" }, 409);

  const hashedPassword = await hash(password, saltRounds);

  await db
    .insert(usersTable)
    .values({ username, email, password: hashedPassword });

  return c.json({ ok: true, message: "user has been signed up" }, 200);
});

export default signupRoute;
