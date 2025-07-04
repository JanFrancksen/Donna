import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import tailwindConfig from 'utils/tailwind.config';
import { EmailButton } from '../components/button';
import { EmailSection } from '../components/email-section';
import { Heading } from '../components/heading';
import { Logo } from '../components/logo';

export const ReactivationEmail = () => (
  <Html>
    <Head />
    <Preview>We miss you – a little extra is waiting for you!</Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='mb-6 text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
          </Section>

          <Heading as='h2' className='mb-2' size='h2'>
            We miss you! 👋
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            It's been a while since you were last active with us. We'd love to
            see you back!
          </Text>

          <EmailSection className='mb-6' size='sm' variant='primary'>
            <Text className='text-gray-800'>
              As a thank you, enjoy a <strong>10% welcome-back discount</strong>{' '}
              on your next order.
            </Text>
          </EmailSection>

          <EmailButton
            className='mt-2 mb-4 w-full'
            href='https://yourdomain.com/reactivate'
            size='lg'
            style={{ backgroundColor: '#007291' }}
            variant='default'
          >
            Reactivate Now
          </EmailButton>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            If you no longer wish to receive emails, you can unsubscribe at any
            time.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ReactivationEmail;
