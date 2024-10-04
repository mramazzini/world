"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { AuthResult } from "./types/types";

const expiration = "48h";
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// we generate a token when they login or signup
// its stored in cookies and sent with every request
export const generateToken = async (id: number) => {
  const jwt = await new SignJWT();
  const token = await jwt
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setSubject(id.toString())
    .setExpirationTime(expiration)
    .sign(secret);

  cookies().set("token", token, {
    maxAge: 60 * 60,
    httpOnly: true, // prevent client-side access
  });

  return token;
};

// we destroy the token when they logout
export const destroySession = async () => {
  cookies().set("token", "", {
    maxAge: 0,
  });
};

// we verify the token when they make a request
// if the token is valid, we know they are logged in

export const verifyToken = async () => {
  try {
    const token = cookies().get("token");

    if (!token) return false;

    const { payload } = await jwtVerify(token.value, secret);
    if (!payload) return false;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getUserId = async () => {
  try {
    const token = cookies().get("token");

    if (!token) return -1;

    const { payload } = await jwtVerify(token.value, secret);
    if (!payload) return -1;
    if (payload.sub) {
      return parseInt(payload.sub);
    }
    return -1;
  } catch (error) {
    console.log(error);
    return -1;
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
  return process.env.ADMIN_ID === userId.toString();
};
