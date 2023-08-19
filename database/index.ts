import { drizzle as drizzleOrm } from 'drizzle-orm/mysql2';
import { createConnection } from 'mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import * as schema from './schema';
import { getConstants } from './utils';

const {
  host,
  port,
  user,
  password,
  database,
  rejectUnauthorized,
  automaticMigration,
} = getConstants();

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

export const drizzle = drizzleOrm(connection, { schema, mode: 'planetscale' });

if (automaticMigration) {
  migrate(drizzle, {
    migrationsFolder: './.migrations',
  });
}
