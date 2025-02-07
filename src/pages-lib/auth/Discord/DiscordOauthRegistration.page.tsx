'use client';
import Loading from '@/components/UI/Loading';
import { createUserFromDiscord } from '@/lib/actions/auth/oauth/discord.actions';
import { AuthResult } from '@/lib/types/types';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const DiscordOAuthComponent = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const params = useSearchParams();
  useEffect(() => {
    const createUser = async () => {
      const code = params.get('code');

      if (!code) {
        return;
      }
      const data = await createUserFromDiscord(code);
      switch (data) {
        case AuthResult.FailedToCreateUser:
          setLoading(false);
          return setError('Failed to create user');
        case AuthResult.InvalidCredentials:
          setLoading(false);
          return setError('Invalid credentials');
        case AuthResult.Success:
          return router.push('/dashboard');
      }
    };

    createUser();
  }, [params, router]);
  return (
    <div>
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </div>
  );
};

const DiscordOauthRegistrationPage = () => {
  return (
    <Suspense>
      <DiscordOAuthComponent />
    </Suspense>
  );
};

export default DiscordOauthRegistrationPage;
