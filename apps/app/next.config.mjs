import './src/env.mjs';

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@repo/supabase'],
  experimental: {
    instrumentationHook: process.env.NODE_ENV === 'production',
  },

  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://eu.i.posthog.com/:path*',
      },
    ];
  },
  /** This is required to support PostHog trailing slash API requests */
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
