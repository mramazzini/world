'use client';
import Loading from '@/components/UI/Loading';
import { loginWithDiscord } from '@/lib/actions/auth/oauth/discord.actions';
import { AuthResult } from '@/lib/types/types';
import { buildDiscordURI } from '@/Utility/buildDiscordURI';
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
            router.push(buildDiscordURI());
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
