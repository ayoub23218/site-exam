import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";

export const reservationTable = pgTable("reservation", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").unique().notNull(),
  numtel: text("numtel").notNull(), 
  number: integer("number").notNull(), 
  heure: text("heure").notNull(),
  supplementaire: text("supplementaire").notNull(),
});