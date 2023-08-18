import { migrateAutomatically, mysqlConnection } from './utils';
import * as schema from './schema';

export const drizzle = mysqlConnection(schema);

migrateAutomatically(drizzle);
