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
import { Heading } from '../components/heading';
import { Logo } from '../components/logo';

export const PasswordResetEmail = () => (
  <Html>
    <Head />
    <Preview>
      🔑 Reset your password – your link is only valid for a short time
    </Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='mb-6 text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
          </Section>

          <Heading as='h2' size='h2' className='mb-2'>
            Reset your password
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            You requested to reset your password. No problem! Click the button
            below to set a new password:
          </Text>

          <EmailButton
            href='https://yourdomain.com/reset-password?token=abc123'
            variant='default'
            size='lg'
            className='mt-2 mb-4 w-full'
            style={{ backgroundColor: '#007291' }}
          >
            Reset Password
          </EmailButton>

          <Text className='mt-6 text-center text-muted-foreground text-sm'>
            This link is only valid for 30 minutes for security reasons. If you
            did not request a new password, you can ignore this email.
          </Text>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            Questions? Contact us at{' '}
            <a href='mailto:support@yourdomain.com' className='underline'>
              support@yourdomain.com
            </a>
            .
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default PasswordResetEmail;
