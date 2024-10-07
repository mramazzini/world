"use client";

import { signup } from "@/lib/actions/auth/auth.actions";
import { AuthResult } from "@/lib/utils/types/types";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useErrorModal from "../modals/ErrorModal";
const RegisterForm = () => {
  const { ErrorModal, openModal } = useErrorModal();
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const err = await signup({
        email: formData.get("email") as string,
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        confirmPassword: formData.get("confirmPassword") as string,
      });
      console.log(err);

      if (err != AuthResult.Success) {
        console.log(err);

        openModal(err);
        return;
      }

      openModal("");

      // Redirect to last page
      if (params.get("redirect")) {
        router.push(params.get("redirect") as string);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      openModal("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      {ErrorModal}
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            name="username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            name="password"
          />
          {/* confirm pass */}
        </label>
        <label className="input input-bordered flex items-center gap-2 my-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 opacity-70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
              fill="currentColor"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </label>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {/* <Link
              className="font-medium text-primary hover:text-blue-600"
              href="/auth/forgot-password"
            >
              Forgot your password?
            </Link> */}
          </div>

          <div>
            <button type="submit" className="btn btn-primary text-white">
              Log in
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
