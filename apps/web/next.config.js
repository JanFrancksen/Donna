import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))('./src/env');

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/** Enables hot reloading for local packages without a build step */
	transpilePackages: ['@repo/api', '@repo/db', '@repo/ui', '@repo/validators'],

	/** We already do linting and typechecking as separate tasks in CI */
	typescript: { ignoreBuildErrors: true },

	async rewrites() {
		return [
			{
				source: '/ingest/static/:path*',
				destination: 'https://us-assets.i.posthog.com/static/:path*',
			},
			{
				source: '/ingest/:path*',
				destination: 'https://us.i.posthog.com/:path*',
			},
		];
	},
	/** This is required to support PostHog trailing slash API requests */
	skipTrailingSlashRedirect: true,
};

export default config;
