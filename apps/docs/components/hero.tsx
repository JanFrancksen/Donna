'use client';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import Link from 'next/link';
import DotPattern from './dot-pattern';

export function Hero() {
  return (
    <>
      <div className='mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0'>
        <div className='relative flex flex-col items-center border border-red-500'>
          <DotPattern width={5} height={5} />

          <div className='-left-1.5 -top-1.5 absolute h-3 w-3 bg-red-500 text-white' />
          <div className='-bottom-1.5 -left-1.5 absolute h-3 w-3 bg-red-500 text-white' />
          <div className='-right-1.5 -top-1.5 absolute h-3 w-3 bg-red-500 text-white' />
          <div className='-bottom-1.5 -right-1.5 absolute h-3 w-3 bg-red-500 text-white' />

          <div className='relative z-20 mx-auto flex flex-col items-center gap-8 py-6 md:p-10 xl:py-20'>
            <h1 className='font-bold text-3xl leading-tight md:text-5xl'>
              This is Donna
            </h1>

            <DynamicCodeBlock
              lang='ts'
              code='bunx degit JanFrancksen/Donna donna'
            />
            <Link
              href='/docs'
              className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
            >
              read the docs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
