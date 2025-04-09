import type { InferSelectModel } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  real,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const opening_system = pgEnum('opening_system', [
  'hingedoor',
  'pivotdoor',
  'slidingdoor',
  'fixedelement',
]);
export const door_variants = pgEnum('door_variants', [
  'singledoor',
  'doubledoor',
]);
export const rotation_direction = pgEnum('rotation_direction', [
  'din_left',
  'din_right',
]);

export const symmetry = pgEnum('symmetry', ['symmetric', 'asymmetric']);

export const pinlock = pgEnum('pinlock', ['din_left', 'din_right']);

export const sliding_direction = pgEnum('sliding_direction', [
  'din_left',
  'din_right',
]);

export const sliding_system = pgEnum('sliding_system', [
  'classic',
  'loft_style',
]);

export const sliding_door_montage_type = pgEnum('sliding_door_montage_type', [
  'ceiling',
  'wall',
]);

export const service_type = pgEnum('service_type', ['delivery', 'montage']);

export const client_type = pgEnum('client_type', ['private', 'company']);

export const salutation = pgEnum('salutation', ['mr', 'ms', 'company']);

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  archived: boolean('archived').notNull().default(false),
  client_type: client_type('client_type').notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
  company_name: varchar('company_name', { length: 255 }),
  salutation: salutation('salutation').notNull(),
  first_name: varchar('first_name', { length: 255 }).notNull(),
  last_name: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 255 }),
  street: varchar('street', { length: 255 }).notNull(),
  house_number: varchar('house_number', { length: 255 }).notNull(),
  zip_code: varchar('zip_code', { length: 255 }).notNull(),
  city: varchar('city', { length: 255 }).notNull(),
  country: varchar('country', { length: 255 }).notNull(),
  newsletter_subscription_accepted: boolean('newsletter_subscription_accepted')
    .notNull()
    .default(false),
  distance_to_location: real('distance_to_location'),
  travel_time_in_seconds: integer('travel_time_in_seconds'),
  service_type: service_type('service_type').notNull(),
  aufmaß: boolean('aufmaß').notNull().default(false),
  gebietsschutz: boolean('gebietsschutz').notNull().default(false),
  commission_number: varchar('commission_number', { length: 255 }),
  message: text('message'),
});

export const door_configuration = pgTable('door_configuration', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
  orderId: uuid('orderId')
    .notNull()
    .references(() => orders.id),
  opening_system: opening_system('opening_system').notNull(),
  door_variant: door_variants('door_variant').notNull(),
  rotation_direction: rotation_direction('rotation_direction').notNull(),
  symmetry: symmetry('symmetry').notNull(),
  pinlock: pinlock('pinlock').notNull(),
  sliding_direction: sliding_direction('sliding_direction').notNull(),
  sliding_system: sliding_system('sliding_system').notNull(),
  sliding_door_montage_type: sliding_door_montage_type(
    'sliding_door_montage_type'
  ).notNull(),
  door_width: real('door_width').notNull(),
  door_height: real('door_height').notNull(),
  door_thickness: real('door_thickness').notNull(),
});

export type Order = InferSelectModel<typeof orders>;
export type DoorConfiguration = InferSelectModel<typeof door_configuration>;
