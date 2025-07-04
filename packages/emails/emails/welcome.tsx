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

export default function WelcomeEmail() {
  return (
    <Html>
      <Preview>Welcome to our newsletter!</Preview>
      <Tailwind config={tailwindConfig}>
        <Body className='bg-background font-sans'>
          <Container className='mx-auto my-10 max-w-lg rounded-xl border border-border bg-white p-6 shadow-sm'>
            <Section className='mb-6 text-center'>
              <Logo baseUrl='https://yourdomain.com/images' />
            </Section>
            <Heading as='h2' className='mb-2' size='h2'>
              Welcome!
            </Heading>
            <EmailSection className='mt-4' size='sm' variant='default'>
              <Text className='text-base text-muted-foreground'>
                Thank you for signing up for our newsletter! From now on, you'll
                receive exciting updates, useful tips, and exclusive offers
                directly in your inbox.
              </Text>
              <Text className='mt-4 text-base text-muted-foreground'>
                As a small welcome gift, you get <strong>10% off</strong> your
                first order 🎉
              </Text>
              <Text className='mt-4 text-base text-muted-foreground'>
                Follow us on our social channels and never miss an update.
              </Text>
            </EmailSection>
            <Section className='mt-6 text-center'>
              <Text className='text-muted-foreground text-sm'>
                Your [Company Name] Team
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
