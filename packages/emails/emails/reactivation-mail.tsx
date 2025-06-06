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
import { EmailSection } from '../components/emailSection';
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

          <Heading as='h2' size='h2' className='mb-2'>
            We miss you! 👋
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            It's been a while since you were last active with us. We'd love to
            see you back!
          </Text>

          <EmailSection variant='primary' size='sm' className='mb-6'>
            <Text className='text-gray-800'>
              As a thank you, enjoy a <strong>10% welcome-back discount</strong>{' '}
              on your next order.
            </Text>
          </EmailSection>

          <EmailButton
            href='https://yourdomain.com/reactivate'
            variant='default'
            size='lg'
            className='mt-2 mb-4 w-full'
            style={{ backgroundColor: '#007291' }}
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
