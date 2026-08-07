import { Metadata } from 'next';
import { getSession } from '@/lib/auth';
import Profile from './Profile';
import { getProfile } from '@/lib/actions/profile';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function Page() {
  const authSession = await getSession({
      headers: await headers()
  })
  if (!authSession) return null;

  const profile = await getProfile();
  if (!profile){
    throw new Error('')
  }
  return (
     <Profile
      profile={profile}
      email={authSession.user.email}
    />
  );
}
