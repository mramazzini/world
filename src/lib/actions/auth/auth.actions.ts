'use server';
import bcrypt from 'bcrypt';
import { PrismaClient, UserType } from '@prisma/client';
import { AuthResult } from '@/lib/types/types';
import {
  generateToken,
  validateEmail,
  validateSecureString,
} from '@/lib/utils/auth';
import { createUser } from '../db/general/create.actions';
import { sendNewUserMessage } from '@/lib/webhook/DiscordWebhook';
import { v4 } from 'uuid';

const db = new PrismaClient();

export const login = async (data: {
  emailOrUsername: string;
  password: string;
}): Promise<AuthResult> => {
  const { emailOrUsername, password } = data;

  const user = await db.user.findFirst({
    where: {
      AND: [
        {
          OR: [
            {
              email: emailOrUsername,
            },
            {
              username: emailOrUsername,
            },
          ],
        },
        {
          type: UserType.NORMAL,
        },
      ],
    },
  });

  if (!user) {
    return AuthResult.UserNotFound;
  }

  if (!user.password) {
    return AuthResult.UserNotFound;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return AuthResult.InvalidCredentials;
  }
  generateToken(user.id);
  return AuthResult.Success;
};

export const signup = async (data: {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}): Promise<AuthResult> => {
  const { email, password, confirmPassword } = data;
  const user = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (user) {
    return AuthResult.EmailAlreadyExists;
  }
  if (!validateEmail(email)) {
    return AuthResult.EmailNotValid;
  }
  const passwordError: AuthResult = await validateSecureString(
    password,
    confirmPassword
  );

  if (passwordError !== AuthResult.Success) {
    return passwordError;
  }
  //find if username exists
  const usernameExists = await db.user.findFirst({
    where: {
      username: data.username,
    },
  });

  if (usernameExists) {
    return AuthResult.UserAlreadyExists;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
  const newUser = await createUser({
    id: v4(),
    email,
    password: hashedPassword,
    username: data.username,
  });

  //   await sendAccountConfirmationEmail(
  //     newUser.email,
  //     await newUser.verificationToken
  //   );
  if (!newUser) {
    return AuthResult.FailedToCreateUser;
  }

  generateToken(newUser.id);

  try {
    sendNewUserMessage(newUser?.username || '');
  } catch (error) {
    console.error('Failed to send verification email', error);
  }

  return AuthResult.Success;
};
