import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const wurstwasser = pgTable('wurstwasser', {
  id: integer(),
  name: varchar(),
  price: integer(),
  createdAt: timestamp(),
  updatedAt: timestamp(),
});
