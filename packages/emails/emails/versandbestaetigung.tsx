import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import tailwindConfig from 'utils/tailwind.config';
import { EmailSection } from '../components/emailSection';
import { Heading } from '../components/heading';
import { Logo } from '../components/logo';

export default function ShippingNotificationEmail() {
  return (
    <Html>
      <Head />
      <Preview>
        Your package is on its way! Here are your shipping details
      </Preview>
      <Tailwind config={tailwindConfig}>
        <Body className='bg-background font-sans'>
          <Container className='mx-auto my-10 max-w-xl rounded-xl border border-border bg-white p-6 shadow-md'>
            <Section className='mb-6 text-center'>
              <Logo baseUrl='https://yourdomain.com/images' />
            </Section>
            <Heading as='h2' size='h2' className='mb-2'>
              Your package is on the way!
            </Heading>
            <Text className='mb-6 text-center text-base text-muted-foreground'>
              Good news – your order has just been shipped and is on its way to
              you. 🎉
            </Text>
            <EmailSection className='mb-6' variant='default' size='sm'>
              <Text className='text-gray-600 text-sm'>
                Order number: <strong>#123456</strong>
              </Text>
              <Text className='text-gray-600 text-sm'>
                Shipping date: <strong>2025-06-02</strong>
              </Text>
              <Text className='text-gray-600 text-sm'>
                Carrier: <strong>DHL</strong>
              </Text>
              <Text className='text-gray-600 text-sm'>
                Tracking link:
                <Link
                  href='https://www.dhl.de/sendungsverfolgung'
                  className='text-blue-600 underline'
                >
                  Track your shipment
                </Link>
              </Text>
            </EmailSection>
            <EmailSection className='mb-6' variant='default' size='sm'>
              <Text className='mb-2 font-semibold text-gray-800 text-lg'>
                Shipping address
              </Text>
              <Text className='text-gray-700 text-sm'>
                Max Mustermann
                <br />
                Musterstraße 123
                <br />
                12345 Musterstadt
                <br />
                Germany
              </Text>
            </EmailSection>
            <EmailSection className='mb-6' variant='default' size='sm'>
              <Text className='text-base text-muted-foreground'>
                You will receive another confirmation once your package has been
                delivered. If you have any questions about your delivery, our
                support team is happy to help.
              </Text>
            </EmailSection>
            <Section className='text-center text-muted-foreground text-sm'>
              <Text>
                Thank you for your order!
                <br />– Your Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
