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

export const BirthdayEmail = () => (
  <Html>
    <Head />
    <Preview>🎉 Happy Birthday – a gift is waiting for you!</Preview>
    <Tailwind config={tailwindConfig}>
      <Body className='bg-background font-sans text-base'>
        <Container className='mx-auto max-w-xl rounded-xl border border-border bg-white p-8 shadow-md'>
          <Section className='text-center'>
            <Logo baseUrl='https://yourdomain.com/images' />
            <Img
              src='https://placehold.co/200x200'
              alt='Birthday illustration'
              className='mx-auto mb-6 rounded-lg'
              width='200'
              height='200'
            />
          </Section>

          <Heading as='h2' size='h2' className='mb-2'>
            Congratulations! 🎂
          </Heading>

          <Text className='mb-4 text-center text-muted-foreground'>
            On your special day, we want to wish you all the best – and of
            course, a little gift is waiting for you!
          </Text>

          <EmailSection
            variant='success'
            size='sm'
            className='mb-6 text-center'
          >
            <Text className='text-gray-800'>
              🎁 <strong>€10 Birthday Voucher</strong>
              <br />
              Valid until: <strong>7 days</strong> after your birthday
            </Text>
          </EmailSection>

          <EmailButton
            href='https://yourdomain.com/birthday-redeem'
            variant='default'
            size='lg'
            className='mt-2 mb-4 w-full'
            style={{ backgroundColor: '#007291' }}
          >
            Redeem Voucher
          </EmailButton>

          <Text className='mt-8 text-center text-muted-foreground text-sm'>
            Thank you for being part of our community 💙
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default BirthdayEmail;
