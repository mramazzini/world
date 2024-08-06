"use server";
import bcrypt from "bcrypt";
import { PrismaClient, User } from "@prisma/client";
import { AuthResult } from "@/lib/types";
import {
  generateToken,
  validateEmail,
  validateSecureString,
} from "@/lib/utils/auth";
import { createUser } from "../db/general/create.actions";

const db = new PrismaClient();

export const login = async (data: {
  email: string;
  password: string;
}): Promise<AuthResult> => {
  const { email, password } = data;
  const user = await db.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
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
  console.log("createUser");

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
  const oneHourFromNow = new Date();
  oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);
  const newUser = await createUser({
    email,
    password: hashedPassword,
    username: data.username,
    // verificationExpiry: oneHourFromNow,
  });

  //   await sendAccountConfirmationEmail(
  //     newUser.email,
  //     await newUser.verificationToken
  //   );
  if (!newUser) {
    return AuthResult.FailedToCreateUser;
  }

  generateToken(newUser.id);
  return AuthResult.Success;
};
