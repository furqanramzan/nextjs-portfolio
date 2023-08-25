import {
  bigint,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { mysqlTableCreator } from './utils';

const mysqlTable = mysqlTableCreator();

export const admins = mysqlTable(
  'admins',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
  },
  (table) => ({
    emailIdx: uniqueIndex('email_idx').on(table.email),
  }),
);

export const adminPasswords = mysqlTable('admin_passwords', {
  id: serial('id').primaryKey(),
  adminId: bigint('admin_id', { mode: 'number' })
    .notNull()
    .references(() => admins.id),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const adminsRelations = relations(admins, ({ one }) => ({
  adminPassword: one(adminPasswords, {
    fields: [admins.id],
    references: [adminPasswords.adminId],
  }),
}));

export const services = mysqlTable('services', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  description: varchar('description', { length: 256 }).notNull(),
  icon: text('icon').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const educations = mysqlTable('educations', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  institute: varchar('institute', { length: 256 }).notNull(),
  year: varchar('year', { length: 256 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
