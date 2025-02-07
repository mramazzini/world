'use server';

import { AuthResult } from '@/lib/types/types';
import {
  generateDiscordToken,
  getToken,
  IDiscordUserToken,
} from '@/lib/utils/auth';
import { sendNewUserMessage } from '@/lib/webhook/DiscordWebhook';
import { PrismaClient, UserType } from '@prisma/client';
import { v4 } from 'uuid';

interface DiscordTokenData {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface DiscordUserData {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string;
  avatar?: string;
  system?: boolean;
  locale: string;
  verified: boolean;
  email: string;
  flags: number;
  premium_type: number;
  public_flags: number;
  banner_color: string;
}

export const getDiscordTokenData = async (
  code: string
): Promise<DiscordTokenData | null> => {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Discord client ID or secret not provided');
  }

  try {
    const response = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.DOMAIN_NAME || 'http://localhost:3000'}/oauth/discord/register`,
        scope: 'identify',
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = (await response.json()) as DiscordTokenData;
    if (!data?.access_token) {
      throw new Error(`Failed to get token data ${JSON.stringify(data)}`);
    }
    return data;
  } catch (error) {
    console.error('Failed to get token data', error);
    return null;
  }
};

export const getDiscordUserData = async (token: string) => {
  const response = await fetch('https://discord.com/api/users/@me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (await response.json()) as DiscordUserData;
};

export const createUserFromDiscord = async (
  code: string
): Promise<AuthResult> => {
  const db = new PrismaClient();

  try {
    const tokenData = await getDiscordTokenData(code);
    if (!tokenData?.access_token) {
      console.error('token missing access_token');
      return AuthResult.InvalidCredentials;
    }
    const userData = await getDiscordUserData(tokenData?.access_token);

    if (!userData?.id) {
      console.error('Failed to get user data');
      return AuthResult.InvalidCredentials;
    }

    const user = await db.user.findFirst({
      where: {
        discordId: userData.id,
      },
    });

    if (user) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          discordAccessToken: tokenData.access_token,
          discordRefreshToken: tokenData.refresh_token,
        },
      });
      generateDiscordToken(
        user.id,
        tokenData.refresh_token,
        tokenData.access_token,
        new Date(new Date().getTime() + tokenData.expires_in * 1000)
      );
      return AuthResult.Success;
    }

    const newUser = await db.user.create({
      data: {
        id: v4(),
        discordId: userData.id,
        discordUsername: userData.username,
        discordEmail: userData.email,
        discordAvatar: userData.avatar,
        discordAccessToken: tokenData.access_token,
        discordRefreshToken: tokenData.refresh_token,
      },
    });

    generateDiscordToken(
      newUser.id,
      tokenData.refresh_token,
      tokenData.access_token,
      new Date(new Date().getTime() + tokenData.expires_in * 1000)
    );

    try {
      sendNewUserMessage(newUser?.discordUsername || '');
    } catch (error) {
      console.error('Failed to send verification email', error);
    }

    return AuthResult.Success;
  } catch (error) {
    console.error('Failed to create/authenticate user', error);
    return AuthResult.FailedToCreateUser;
  } finally {
    await db.$disconnect();
  }
};

export const loginWithDiscord = async () => {
  //check for token in cookies
  //if no token, redirect to discord oauth
  //if token, check if expired
  //if expired, use refresh token to get new access token
  //if not expired, return success

  const token = await getToken();
  console.log(token);
  if (!token) {
    console.error('No token found');
    return AuthResult.InvalidCredentials;
  }
  if (token.type != UserType.DISCORD) {
    console.error('Token is not discord');
    return AuthResult.InvalidCredentials;
  }

  const discordToken = token as unknown as IDiscordUserToken;

  const { refresh_token, expires_at } = discordToken;

  //not expired
  if (new Date(expires_at) < new Date()) {
    console.error('Token is expired');
    return AuthResult.InvalidCredentials;
  }

  //expired
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Discord client ID or secret not provided');
  }

  try {
    const response = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token,
        redirect_uri: `${process.env.DOMAIN_NAME || 'http://localhost:3000'}/dashboard`,
        scope: 'identify',
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = (await response.json()) as DiscordTokenData;
    if (!data?.access_token) {
      return AuthResult.InvalidCredentials;
    }

    generateDiscordToken(
      discordToken.id,
      data.refresh_token,
      data.access_token,
      new Date(new Date().getTime() + data.expires_in * 1000)
    );

    return AuthResult.Success;
  } catch (error) {
    console.error('Failed to refresh_token', error);
    return AuthResult.InvalidCredentials;
  }
};
