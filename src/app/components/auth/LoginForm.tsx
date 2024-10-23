"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { AuthResult } from "@/lib/utils/types/types";
import { login } from "@/lib/actions/auth/auth.actions";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import useErrorModal from "../modals/ErrorModal";
import Loading from "../UI/Loading";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "../UI/Formik/FormField";
import LoadingButton from "../UI/Formik/LoadingButton";

interface UserInput {
  emailOrUsername: string;
  password: string;
}

const Login = () => {
  const { ErrorModal, openModal } = useErrorModal();
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = async (
    values: UserInput,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      // Race between the login function and the timeout
      const err = await login({
        emailOrUsername: values.emailOrUsername,
        password: values.password,
      });

      if (err != AuthResult.Success) {
        console.log(err);
        setSubmitting(false);
        openModal(err);
        return;
      }

      // Redirect to last page
      if (params.get("redirect")) {
        const redirect = params.get("redirect") as string;
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/dashboard");
        }
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      openModal(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };

  const loginSchema = Yup.object().shape({
    emailOrUsername: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <div className="bg-base-300 p-4 rounded-xl">
      <h1 className="text-3xl font-bold mb-4 divider">Login</h1>
      {ErrorModal}
      <Formik
        initialValues={
          {
            emailOrUsername: "",
            password: "",
          } as UserInput
        }
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions.setSubmitting);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <FormField
              name="emailOrUsername"
              label="Email or Username"
              formProps={{
                type: "text",
                placeholder: "Email or Username",
              }}
            />
            <FormField
              name="password"
              label="Password"
              formProps={{
                type: "password",
                placeholder: "Password",
              }}
            />
            <LoadingButton type="submit" isLoading={isSubmitting}>
              Login
            </LoadingButton>
            <div className="divider divider-accent"></div>
            <p className="">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-blue-500">
                Register -&gt;
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const LoginForm = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
  );
};

export default LoginForm;
