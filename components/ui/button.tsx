import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { Icons } from '../shared/icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'size-10',
        'icon-sm': 'size-9',
        'icon-lg': 'size-11',
      },
      iconSize: {
        default: '[&>svg]:size-5',
        sm: '[&>svg]:size-4',
        lg: '[&>svg]:size-6',
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
      iconSize: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, disabled, loading, rounded, iconSize, ...props }, ref) => {
    return (
      <button
        disabled={loading || disabled}
        className={cn(buttonVariants({ variant, size, rounded, iconSize, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {loading && <Icons.spinner className="ml-2 size-4 animate-spin" />}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
