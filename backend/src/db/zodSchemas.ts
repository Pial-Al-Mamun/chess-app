import { createSelectSchema } from "drizzle-zod";
import { usersTable } from "./schema.js";
import { z } from "zod";

export const userSchema = createSelectSchema(usersTable);

// Create specific schemas for your routes
export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

export const registerSchema = userSchema.pick({
  username: true,
  email: true,
  password: true,
});

// Later you can create editProfileSchema, etc.
