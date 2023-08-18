import { env } from 'node:process';
import { mysqlTableCreator as drizzleMysqlTableCreator } from 'drizzle-orm/mysql-core';
import { z } from 'zod';
import { createConnection } from 'mysql2';
import type { MySql2Database } from 'drizzle-orm/mysql2';
import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';

export function mysqlConnection<T extends Record<string, unknown>>(schema?: T) {
  const { host, port, user, password, database, rejectUnauthorized } =
    getConstants();

  const connection = createConnection({
    host,
    port,
    user,
    password,
    database,
    ssl: {
      rejectUnauthorized,
    },
  });

  return drizzle(connection, { schema, mode: 'default' });
}

export function automaticMigration(db: MySql2Database) {
  const { automaticMigration } = getConstants();

  if (automaticMigration) {
    return migrate(db, {
      migrationsFolder: './.migrations',
    });
  }
}

export function mysqlTableCreator() {
  const { DATABASE_TABLE_PREFIX } = z
    .object({
      DATABASE_TABLE_PREFIX: z.string(),
    })
    .parse(env);
  return drizzleMysqlTableCreator((name) => `${DATABASE_TABLE_PREFIX}_${name}`);
}

function getConstants() {
  const constants = z
    .object({
      DATABASE_HOST: z.string(),
      DATABASE_PORT: z.coerce.number(),
      DATABASE_USER: z.string(),
      DATABASE_PASSWORD: z.string(),
      DATABASE_NAME: z.string(),
      DATABASE_REJECT_UNAUTHORIZED: z.coerce.number(),
      DATABASE_AUTOMATIC_MIGRATION: z.coerce.number(),
    })
    .parse(env);

  return {
    host: constants.DATABASE_HOST,
    port: constants.DATABASE_PORT,
    user: constants.DATABASE_USER,
    password: constants.DATABASE_PASSWORD,
    database: constants.DATABASE_NAME,
    rejectUnauthorized: Boolean(constants.DATABASE_REJECT_UNAUTHORIZED),
    automaticMigration: Boolean(constants.DATABASE_AUTOMATIC_MIGRATION),
  };
}
