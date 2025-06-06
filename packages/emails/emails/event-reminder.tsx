import {
  Body,
  Container,
  Head,
  Html,
  Img,
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

export const EventReminderEmail = () => (
  <Html>
    <Head />
    <Preview>🔔 Don't forget: Your webinar starts soon!</Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
            <Img
              src='https://placehold.co/560x200'
              alt='Webinar Banner'
              className='mx-auto mb-4 rounded-md'
              width='560'
              height='200'
            />
          </Section>

          <Heading as='h2' size='h2' className='mb-2'>
            Your webinar starts soon!
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            We're excited to welcome you to our free webinar:
          </Text>

          <EmailSection
            variant='primary'
            size='sm'
            className='mb-6 text-gray-800'
          >
            <Text className='mb-1'>
              <strong>📅 Date:</strong> Tuesday, June 18, 2025
            </Text>
            <Text className='mb-1'>
              <strong>⏰ Time:</strong> 18:00 (CET)
            </Text>
            <Text className='mb-1'>
              <strong>🖥 Topic:</strong> "Marketing Automation for Beginners"
            </Text>
            <Text>
              <strong>🎙️ Host:</strong> Julia Becker, CRM Expert
            </Text>
          </EmailSection>

          <EmailButton
            href='https://yourdomain.com/webinar-join'
            variant='default'
            size='lg'
            className='mt-2 mb-4 w-full'
            style={{ backgroundColor: '#007291' }}
          >
            Join Now
          </EmailButton>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            You are receiving this reminder because you registered for the
            event.
            <br />
            Questions? Email us at{' '}
            <a href='mailto:support@yourdomain.com'>support@yourdomain.com</a>.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EventReminderEmail;
