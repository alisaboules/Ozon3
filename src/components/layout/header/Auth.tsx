'use client';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { signIn, signUp, useSession } from '@/lib/auth-client';
import { Dispatch, RefObject, SetStateAction, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Field } from '@/components/ui/Field';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { CircleAlert } from 'lucide-react';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement | null>;
}

export function Auth({ setIsOpen, ref }: Props) {
  const t = useTranslations('header');
  const { isPending } = useSession();
  const [email, setEmail] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleSignUp = async () => {
    if (!isRegister) {
      setIsRegister(true);
      setError(null);
      return;
    }
    const { error } = await signUp.email({ email, password, name });

    if (error?.message) {
      setError(error.message);
    }
    setError(null);
    setIsRegister(false);

    setPassword('');
    setName('');
    setEmail('');
  };

  const handleSignIn = async () => {
    const { error } = await signIn.email({ email, password });

    if (error?.message) {
      setError(error.message);
    }
  };

  return (
    <Modal onClose={() => setIsOpen(false)} ref={ref}>
      <h1 className="text-3xl font-bold mb-5">{t('enter')}</h1>
      {error && (
        <div className="text-red-500 flex items-center mb-4 gap-1.5">
          <CircleAlert />
          <p className="italic">\{error}</p>
        </div>
      )}
      {isPending ? (
        <SkeletonLoader count={3} className="mb-3 w-full h-13.25" />
      ) : (
        <>
          <Field
            type="email"
            placeholder={t('enterEmail')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Field
            type="password"
            placeholder={t('enterPassword')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister && (
            <Field
              type="text"
              placeholder={t('enterName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        </>
      )}
      <div className="flex gap-2 mt-4">
        {!isRegister && (
          <Button onClick={handleSignIn} disabled={isPending}>
            {isPending ? t('loading') : t('log_in')}
          </Button>
        )}
        <Button variant={isRegister ? 'primary' : 'secondary'} onClick={handleSignUp} disabled={isPending}>
          {isPending ? t('loading') : t('sign_up')}
        </Button>
      </div>
    </Modal>
  );
}
