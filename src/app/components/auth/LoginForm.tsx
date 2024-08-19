"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AuthResult } from "@/lib/types";
import { login } from "@/lib/actions/auth/auth.actions";
import { useRouter } from "next/navigation";
import useErrorModal from "../modals/ErrorModal";
const LoginForm = () => {
  const { ErrorModal, openModal } = useErrorModal();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const err = await login({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });

      if (err != AuthResult.Success) {
        console.log(err);
        openModal(err);
        return;
      }

      // Redirect to homepage
      router.push("/");
    } catch (error) {
      console.log(error);
      openModal("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      {ErrorModal}
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
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
            required
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
            required
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

export default LoginForm;
