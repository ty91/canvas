import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Example table - modify or replace as needed
// export const users = sqliteTable("users", {
//   id: integer("id").primaryKey({ autoIncrement: true }),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
// });
