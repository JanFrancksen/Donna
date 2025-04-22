import { polar } from '@polar-sh/better-auth';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { organization } from 'better-auth/plugins';
import { sso } from 'better-auth/plugins/sso';
import { db } from '..';
import { polarClient } from './polar-client';
import { account, session, user, verification } from './schema/auth-schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    sso(),
    nextCookies(),
    organization(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      enableCustomerPortal: true, // Deployed under /portal for authenticated users
      // Configure checkout
      checkout: {
        enabled: true,
        products: [
          {
            productId: '123-456-789', // ID of Product from Polar Dashboard
            slug: 'pro', // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
          },
        ],
        successUrl: '/success?checkout_id={CHECKOUT_ID}',
      },
      // Incoming Webhooks handler will be installed at /polar/webhooks
      webhooks: {
        secret: process.env.POLAR_WEBHOOK_SECRET || '',
        onPayload: (payload) => {
          console.log(payload);
          return Promise.resolve();
        },
      },
    }),
  ],
});
