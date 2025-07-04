import { Img } from '@react-email/components';

export function Logo({ baseUrl }: { baseUrl: string }) {
  return (
    <Img
      alt='Logo'
      className='mx-auto my-0 text-center'
      height={70}
      src={`${baseUrl}/logo.png`}
      width={70}
    />
  );
}
