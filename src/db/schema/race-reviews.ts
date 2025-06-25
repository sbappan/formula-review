import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { z } from "zod";

import races from "./races";
import users from "./users";

const raceReviews = pgTable("race-review", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  raceId: uuid("raceId")
    .notNull()
    .references(() => races.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull(),
  comment: text("comment"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
});

export const raceReviewsRelations = relations(raceReviews, ({ one }) => ({
  author: one(users, {
    fields: [raceReviews.userId],
    references: [users.id],
  }),
}));

export const InsertRaceReviewSchema = z.object({
  raceId: z.string(),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Rating is required" })
    .max(5),
  comment: z.string().optional(),
});

export default raceReviews;
