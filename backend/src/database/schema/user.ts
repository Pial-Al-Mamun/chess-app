import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull().unique(),
});

export type UserInsert = typeof usersTable.$inferInsert;
export type UserRecord = typeof usersTable.$inferSelect;
export type UserQueryResult = typeof usersTable.$inferSelect;
