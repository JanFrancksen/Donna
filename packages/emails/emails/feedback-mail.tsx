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

export const FeedbackRequestEmail = () => (
  <Html>
    <Head />
    <Preview>
      How was your experience with us? Give us 1 minute feedback ⭐
    </Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='mb-6 text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
          </Section>

          <Heading as='h2' size='h2' className='mb-2'>
            Your opinion matters!
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            We hope you enjoyed your experience. Please take a minute to give us
            quick feedback – it only takes 1 minute and helps us improve.
          </Text>

          <EmailButton
            href='https://yourdomain.com/feedback?ref=email'
            variant='default'
            size='lg'
            className='mt-2 mb-4 w-full'
            style={{ backgroundColor: '#007291' }}
          >
            Give Feedback Now
          </EmailButton>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            Thank you for being part of our community 🙏
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default FeedbackRequestEmail;
