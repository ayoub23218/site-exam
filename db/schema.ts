import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const wikiTable = pgTable("wiki", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").unique().notNull(),
  summary: text("summary").notNull(), 
  content: text("content").notNull(), 
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  lastUpdated: timestamp("last_updated").defaultNow(),
});