import { createSelectSchema } from "drizzle-zod";
import { usersTable } from "./schema/user";

export const userSchema = createSelectSchema(usersTable);

export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const signupSchema = userSchema.pick({
  username: true,
  email: true,
  password: true,
});
