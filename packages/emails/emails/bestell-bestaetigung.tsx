import {
  Body,
  Container,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import tailwindConfig from 'utils/tailwind.config';
import { EmailSection } from '../components/email-section';
import { Heading } from '../components/heading';
import { Logo } from '../components/logo';

export default function OrderConfirmationEmail() {
  return (
    <Html>
      <Preview>Thank you for your order – Here is your order summary</Preview>
      <Tailwind config={tailwindConfig}>
        <Body className='bg-background font-sans'>
          <Container className='mx-auto my-10 max-w-xl rounded-xl border border-border bg-white p-6 shadow-md'>
            <Section className='mb-6 text-center'>
              <Logo baseUrl='https://yourdomain.com/images' />
            </Section>
            <Heading as='h2' className='mb-2' size='h2'>
              Thank you for your order!
            </Heading>
            <Text className='mb-6 text-center text-base text-muted-foreground'>
              Your order was placed successfully. Here is a summary:
            </Text>
            <EmailSection className='mb-6' size='sm' variant='default'>
              <Text className='text-gray-600 text-sm'>
                Order number: <strong>#123456</strong>
              </Text>
              <Text className='text-gray-600 text-sm'>
                Order date: <strong>2025-06-02</strong>
              </Text>
            </EmailSection>
            <EmailSection className='mb-6' size='sm' variant='default'>
              <Text className='mb-2 font-semibold text-gray-800 text-lg'>
                Ordered items
              </Text>
              <ul className='ml-5 list-disc space-y-1 text-gray-700 text-sm'>
                <li>Organic Coffee – 500g (1x) – €9.99</li>
                <li>Sustainable Water Bottle – 1 pc – €19.90</li>
              </ul>
            </EmailSection>
            <EmailSection className='mb-6' size='sm' variant='default'>
              <Text className='text-gray-700 text-sm'>
                <strong>Subtotal:</strong> €29.89
                <br />
                <strong>Shipping:</strong> Free
                <br />
                <strong>Total:</strong>{' '}
                <span className='font-semibold text-green-600'>€29.89</span>
              </Text>
            </EmailSection>
            <EmailSection className='mb-6' size='sm' variant='default'>
              <Text className='text-base text-muted-foreground'>
                You will receive another email once your package is on its way.
                If you have any questions, you can contact our support team at
                any time.
              </Text>
            </EmailSection>
            <Section className='text-center text-muted-foreground text-sm'>
              <Text>
                Thank you for your trust!
                <br />– Your [Company Name] Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
