import { Heading as ReactEmailHeading } from '@react-email/components';
import { cn } from '@repo/ui/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

const headingVariants = cva('font-bold text-gray-800', {
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
      h4: 'text-lg',
      h5: 'text-base',
      h6: 'text-sm',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
      semibold: 'font-semibold',
    },
  },
  defaultVariants: {
    size: 'h2',
    align: 'center',
    weight: 'bold',
  },
});

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export function Heading({
  as = 'h2',
  size,
  align,
  weight,
  className,
  children,
}: HeadingProps) {
  return (
    <ReactEmailHeading
      as={as}
      className={cn(
        headingVariants({ size: size ?? as, align, weight, className })
      )}
    >
      {children}
    </ReactEmailHeading>
  );
}

export { headingVariants };
