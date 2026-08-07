import { cn } from '../../utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  className,
  isDisabled = false,
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <button
      disabled={isDisabled}
      {...rest}
      className={cn(
        'bg-primary text-white px-4 py-2 rounded-2xl font-semibold',
        {
          'opacity-50 cursor-not-allowed': isDisabled,
          'bg-transparent text-foreground': variant == 'secondary',
        },
        className,
      )}>
      {children}
    </button>
  );
}
