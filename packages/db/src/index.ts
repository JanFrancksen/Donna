import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as post from './schema/post';
import * as profile from './schema/profile';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
	throw new Error('Missing POSTGRES_URL');
}

const client = postgres(connectionString, { prepare: false });

export const schema = { ...post, ...profile };
export * from 'drizzle-orm';
export const db = drizzle(client, { schema });
