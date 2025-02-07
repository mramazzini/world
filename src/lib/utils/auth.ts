'use server';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { AuthResult } from '../types/types';
import { UserType } from '@prisma/client';

const expiration = '1 week';
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// we generate a token when they login or signup
// its stored in cookies and sent with every request

export interface IDiscordUserToken {
  id: string;
  refresh_token: string;
  access_token: string;
  expires_at: Date;
  type: UserType;
}

export interface IUserToken {
  id: string;
  type: UserType;
}

export type IJwtToken = IDiscordUserToken | IUserToken;

export const generateToken = async (id: string) => {
  const jwt = await new SignJWT();
  const token = await jwt
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setSubject(
      JSON.stringify({
        type: UserType.NORMAL,
        id: id,
      })
    )
    .setExpirationTime(expiration)
    .sign(secret);

  await cookies().set('token', token, {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    httpOnly: true, // prevent client-side access
    sameSite: 'strict', // only send on same site
  });

  return token;
};

export const generateDiscordToken = async (
  id: string,
  refresh_token: string,
  access_token: string,
  expires_at: Date
) => {
  const jwt = await new SignJWT();
  const token = await jwt
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setSubject(
      JSON.stringify({
        type: UserType.DISCORD,
        id: id,
        refresh_token,
        access_token,
        expires_at: expires_at.toISOString(),
      })
    )
    .setExpirationTime(expiration)
    .sign(secret);

  await cookies().set('token', token, {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    httpOnly: true, // prevent client-side access
    sameSite: 'strict', // only send on same site
  });

  return token;
};

// we destroy the token when they logout
export const destroySession = async () => {
  await cookies().set('token', '', {
    maxAge: 0,
  });
};

// we verify the token when they make a request
// if the token is valid, we know they are logged in

export const verifyToken = async () => {
  try {
    const token = cookies().get('token');

    if (!token) return false;

    const { payload } = await jwtVerify(token.value, secret);
    if (!payload) return false;

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getUserId = async () => {
  try {
    const token = await getToken();

    if (token?.id) return token.id;
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getToken = async () => {
  try {
    const token = cookies().get('token');

    if (!token) return null;

    const { payload } = await jwtVerify(token.value, secret);
    if (!payload.sub) return null;
    console.log(payload);
    return JSON.parse(payload.sub) as IJwtToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const validateSecureString = (
  str: string,
  confirmStr: string
): AuthResult => {
  if (str !== confirmStr) {
    return AuthResult.PasswordsDoNotMatch;
  }
  if (str.length < 8) {
    return AuthResult.PasswordTooShort;
  }
  return AuthResult.Success;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const isAdministrator = async () => {
  const userId = await getUserId();
  return process.env.ADMIN_ID === userId;
};
