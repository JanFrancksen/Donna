// components/emailSection.ts
import { Section } from '@react-email/components';
import { cva } from 'class-variance-authority';

export const sectionStyles = cva('rounded-lg p-4', {
  variants: {
    variant: {
      default: 'bg-gray-50',
      primary: 'bg-blue-50',
      success: 'bg-green-50',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'base',
  },
});

export interface EmailSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'success';
  size?: 'sm' | 'base';
}
export const EmailSection: React.FC<EmailSectionProps> = ({
  variant = 'default',
  size = 'base',
  className,
  children,
  ...props
}) => {
  return (
    <Section className={sectionStyles({ variant, size, className })} {...props}>
      {children}
    </Section>
  );
};
