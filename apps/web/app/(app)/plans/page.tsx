import { polarClient } from '@repo/db/polar-client';

export default async function PlansPage() {
  const plans = await polarClient.products.list({ isArchived: false });

  console.log(plans);

  return (
    <div className='flex flex-col gap-4'>
      {plans.result.items.map((plan) => (
        <div key={plan.id}>
          <h2 className='font-bold text-2xl'>{plan.name}</h2>
          <p className='text-muted-foreground text-sm'>{plan.description}</p>
          <p className='text-muted-foreground text-sm'>
            {plan.prices.map((price) => (
              <div key={price.id}>{price.priceAmount}</div>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
