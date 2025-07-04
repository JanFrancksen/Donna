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

export const FeatureUpdateEmail = () => (
  <Html>
    <Head />
    <Preview>✨ New features available – check out our latest update!</Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='mb-6 text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
          </Section>

          <Heading as='h2' className='mb-2' size='h2'>
            Our latest update is here! 🚀
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            We have released exciting new features and improvements for you:
          </Text>

          <EmailSection
            className='mb-6 text-gray-800'
            size='sm'
            variant='primary'
          >
            <ul className='list-disc space-y-2 pl-5 text-left'>
              <li>
                <strong>Live Preview:</strong> See changes in real time.
              </li>
              <li>
                <strong>Dark Mode:</strong> Eye-friendly for day & night.
              </li>
              <li>
                <strong>Improved Dashboard:</strong> Faster navigation, smarter
                overview.
              </li>
            </ul>
          </EmailSection>

          <EmailButton
            className='mt-2 mb-4 w-full'
            href='https://yourdomain.com/updates'
            size='lg'
            style={{ backgroundColor: '#007291' }}
            variant='default'
          >
            See all new features
          </EmailButton>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            Have feedback? We look forward to your message at{' '}
            <a className='underline' href='mailto:feedback@yourdomain.com'>
              feedback@yourdomain.com
            </a>
            .
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default FeatureUpdateEmail;
