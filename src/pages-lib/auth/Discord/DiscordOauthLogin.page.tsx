'use client';
import Loading from '@/components/UI/Loading';
import { loginWithDiscord } from '@/lib/actions/auth/oauth/discord.actions';
import { DISCORD_AUTH_REDIRECT_URI } from '@/lib/globalVars';
import { AuthResult } from '@/lib/types/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DiscordOauthLoginPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const login = async () => {
      const res = await loginWithDiscord();
      {
        switch (res) {
          case AuthResult.InvalidCredentials:
            setLoading(false);
            console.log(res);
            router.push(DISCORD_AUTH_REDIRECT_URI);
            return;
          case AuthResult.Success:
            return router.push('/dashboard');
        }
      }
    };
    login();
  }, [router]);
  return <div>{loading && <Loading />}</div>;
};

export default DiscordOauthLoginPage;
