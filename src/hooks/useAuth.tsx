import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import * as authSlice from '../store/authSlice';
import { useState } from 'react';
import { login, signup } from '@/lib/actions/auth/auth.actions';
import { AuthResult } from '@/lib/types/types';
import { getUserId } from '@/lib/utils/auth';

interface SignupInput {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface LoginInput {
  emailOrUsername: string;
  password: string;
}

interface UseAuthReturn {
  login: (loginInput: LoginInput) => Promise<string | null>;
  register: (signupInput: SignupInput) => Promise<string | null>;
  isLoading: boolean;
  userID: number | null;
  loggedIn: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const userID = useSelector((state: RootState) => state.auth.userId);
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const [isLoading, setLoading] = useState<boolean>(false);

  const loginHandler = async (values: LoginInput) => {
    try {
      setLoading(true);
      const err = await login(values);

      if (err != AuthResult.Success) {
        console.error(err);
        return err;
      }

      const userId = await getUserId();

      dispatch(authSlice.login(userId));
      return null;
    } catch (err) {
      console.error(err);
      return 'Something went wrong. Please try again later.';
    } finally {
      setLoading(false);
    }
  };

  const registerHandler = async (values: SignupInput) => {
    try {
      const err = await signup(values);
      if (err != AuthResult.Success) {
        console.error(err);
        return err;
      }

      const userId = await getUserId();
      dispatch(authSlice.login(userId));
      return null;
    } catch (err) {
      console.error(err);
      return 'Something went wrong. Please try again later.';
    } finally {
      setLoading(false);
    }
  };

  return {
    login: loginHandler,
    register: registerHandler,
    isLoading,
    userID,
    loggedIn,
  };
};
