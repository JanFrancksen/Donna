import { type VariantProps, cva } from 'class-variance-authority';

export const buttonStyles = cva(
	'relative flex items-center justify-center overflow-hidden rounded-lg font-poppins font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed',
	{
		variants: {
			variant: {
				primary: 'bg-brand text-white hover:bg-brand-strong',
				destructive: 'bg-red-600 text-white hover:bg-red-400',
				secondary: '',
				ghost: '',
				clear: '',
			},
			size: {
				xs: 'gap-1.5 rounded-md text-xs',
				sm: 'gap-2.5 rounded-lg text-xs',
				md: 'gap-2.5 rounded-lg text-sm',
			},
			isSquare: {
				true: '',
			},
			hasFullWidth: {
				true: 'w-full',
			},
			isInverted: {
				true: 'disabled:bg-body disabled:text-stroke-strong',
				false: 'disabled:bg-stroke-weak/75 disabled:text-body/75',
			},
		},
		compoundVariants: [
			{
				variant: 'secondary',
				isInverted: false,
				className:
					'border border-stroke-weak bg-background-weak text-body-strong hover:border-stroke-strong hover:bg-background-strong/75',
			},
			{
				variant: 'secondary',
				isInverted: true,
				className:
					'border border-background-weak bg-body-strong text-white hover:bg-body',
			},
			{
				variant: 'ghost',
				isInverted: false,
				className:
					'bg-background-strong text-body-strong hover:bg-stroke-weak/75',
			},
			{
				variant: 'ghost',
				isInverted: true,
				className: 'bg-body/75 text-white hover:bg-body',
			},
			{
				variant: 'clear',
				isInverted: false,
				className: 'text-body-strong hover:bg-background-strong/75',
			},
			{
				variant: 'clear',
				isInverted: true,
				className: 'text-white hover:bg-body/50',
			},
			{
				size: 'xs',
				isSquare: true,
				className: 'size-[1.625rem]',
			},
			{
				size: 'xs',
				isSquare: false,
				className: 'px-3 py-1',
			},
			{
				size: 'sm',
				isSquare: true,
				className: 'size-[2.125rem]',
			},
			{
				size: 'sm',
				isSquare: false,
				className: 'px-4 py-2',
			},
			{
				size: 'md',
				isSquare: true,
				className: 'size-9',
			},
			{
				size: 'md',
				isSquare: false,
				className: 'px-5 py-2',
			},
		],
		defaultVariants: {
			isInverted: false,
			isSquare: false,
			hasFullWidth: false,
			size: 'md',
			variant: 'secondary',
		},
	}
);

export const buttonLoadingIndicatorStyles = cva(
	'absolute inset-0 flex items-center justify-center',
	{
		variants: {
			variant: {
				primary: 'bg-brand text-white',
				destructive: 'bg-red-600 text-white',
				secondary: '',
				ghost: '',
				clear: '',
			},
			isInverted: {
				true: 'disabled:bg-body disabled:text-stroke-strong',
				false: 'disabled:bg-stroke-weak/75 disabled:text-body/75',
			},
		},
		compoundVariants: [
			{
				variant: 'secondary',
				isInverted: false,
				className: 'bg-background-weak text-body-strong',
			},
			{
				variant: 'secondary',
				isInverted: true,
				className: 'bg-body-strong text-white',
			},
			{
				variant: 'ghost',
				isInverted: false,
				className: 'bg-background-strong text-body-strong',
			},
			{
				variant: 'ghost',
				isInverted: true,
				className: 'bg-body text-white',
			},
			{
				variant: 'clear',
				isInverted: false,
				className: 'bg-background-weak text-body-strong',
			},
			{
				variant: 'clear',
				isInverted: true,
				className: 'bg-body-strong text-white',
			},
		],
		defaultVariants: {
			isInverted: false,
			variant: 'secondary',
		},
	}
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
