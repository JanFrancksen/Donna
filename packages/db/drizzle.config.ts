import { defineConfig } from 'drizzle-kit';
import type { Config } from 'drizzle-kit';

const postgresUrl = process.env.POSTGRES_URL;

if (!postgresUrl) throw new Error('Postgres_URL missing!');

export default defineConfig({
	schema: './src/schema/*',
	dialect: 'postgresql',
	dbCredentials: { url: postgresUrl },
	verbose: true,
	strict: true,
}) satisfies Config;
