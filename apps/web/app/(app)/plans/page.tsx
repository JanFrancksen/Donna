import { polarClient } from '@repo/db/polar-client';
import { Pricing } from '@repo/ui/components/blocks/pricing';

export default async function PlansPage() {
  const plans = await polarClient.products.list({ isArchived: false });

  interface Price {
    createdAt: string;
    modifiedAt: string;
    id: string;
    amountType: 'fixed';
    isArchived: boolean;
    productId: string;
    type: 'recurring';
    recurringInterval: 'year';
    priceCurrency: string;
    priceAmount: number;
  }

  interface Product {
    createdAt: string;
    modifiedAt: string;
    id: string;
    name: string;
    description: string | null;
    recurringInterval: 'year';
    isRecurring: boolean;
    isArchived: boolean;
    organizationId: string;
    metadata: Record<string, unknown>;
    prices: Price[];
    benefits: unknown[];
    medias: unknown[];
    attachedCustomFields: unknown[];
  }

  interface ProductList {
    items: Product[];
  }

  const _test: ProductList = {
    items: [
      {
        createdAt: '2025-04-18T17:46:29.458Z',
        modifiedAt: '2025-04-18T17:46:29.952Z',
        id: 'e8c8d3d0-4a9c-4c72-b616-d47ca5057d6e',
        name: 'Premium-Yearly-Plan',
        description: null,
        recurringInterval: 'year',
        isRecurring: true,
        isArchived: false,
        organizationId: 'b715ea26-0d96-411c-818d-a6c86212e8d1',
        metadata: {},
        prices: [
          {
            createdAt: '2025-04-18T17:46:29.461Z',
            modifiedAt: '2025-04-18T17:46:29.955Z',
            id: '5c1d3afb-99ca-4c70-952c-8aee64dcf48e',
            amountType: 'fixed',
            isArchived: false,
            productId: 'e8c8d3d0-4a9c-4c72-b616-d47ca5057d6e',
            type: 'recurring',
            recurringInterval: 'year',
            priceCurrency: 'usd',
            priceAmount: 9000,
          },
        ],
        benefits: [],
        medias: [],
        attachedCustomFields: [],
      },
    ],
  };

  return (
    <div className='container py-20'>
      <Pricing
        plans={[
          {
            name: 'Free',
            price: '100',
            yearlyPrice: '1000',
            period: 'month',
            features: ['1000 credits', '1000 credits', '1000 credits'],
            description: 'Free plan',
            buttonText: 'Get Started',
            href: '/',
            isPopular: false,
          },
          {
            name: 'Free',
            price: '100',
            yearlyPrice: '1000',
            period: 'month',
            features: ['1000 credits', '1000 credits', '1000 credits'],
            description: 'Free plan',
            buttonText: 'Get Started',
            href: '/',
            isPopular: false,
          },
          {
            name: 'Free',
            price: '100',
            yearlyPrice: '1000',
            period: 'month',
            features: ['1000 credits', '1000 credits', '1000 credits'],
            description: 'Free plan',
            buttonText: 'Get Started',
            href: '/',
            isPopular: false,
          },
        ]}
      />

      <pre>{JSON.stringify(plans, null, 2)}</pre>
    </div>
  );
}
