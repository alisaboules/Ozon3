import { cn } from '../../utils/cn';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Field({ className, ...rest }: Props) {
  return (
    <input
      className={cn(
        'w-full border-2 border-zinc-300 rounded-lg transition-colors focus:border-primary px-4 py-3 mb-3',
        className,
      )}
      {...rest}
    />
  );
}
