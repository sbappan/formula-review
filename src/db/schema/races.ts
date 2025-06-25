import { boolean, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

const races = pgTable("race", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  latestRace: boolean("latestRace").notNull().default(false),
});

export default races;
