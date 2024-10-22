"use client";

import { signup } from "@/lib/actions/auth/auth.actions";
import { AuthResult } from "@/lib/utils/types/types";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import useErrorModal from "../modals/ErrorModal";
import Loading from "../UI/Loading";
import { Form, Formik } from "formik";
import FormField from "../UI/Formik/FormField";
import LoadingButton from "../UI/Formik/LoadingButton";
import * as Yup from "yup";

interface SignupUserInput {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { ErrorModal, openModal } = useErrorModal();
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = async (
    values: SignupUserInput,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      const err = await signup(values);

      if (err != AuthResult.Success) {
        console.error(err);
        setSubmitting(false);
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
      setSubmitting(false);
    }
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Not a valid Email").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  return (
    <>
      {ErrorModal}
      <div className="bg-base-300 p-4 rounded-xl">
        <h1 className="text-3xl font-bold mb-4 divider">Signup</h1>
        {ErrorModal}
        <Formik
          initialValues={
            {
              email: "",
              username: "",
              password: "",
              confirmPassword: "",
            } as SignupUserInput
          }
          validationSchema={signupSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions.setSubmitting);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <FormField
                label="Email"
                name="email"
                formProps={{
                  placeholder: "Email",
                  type: "email",
                }}
              />
              <FormField
                label="Username"
                name="username"
                formProps={{
                  type: "text",
                  placeholder: "Username",
                }}
              />
              <FormField
                label="Password"
                name="password"
                formProps={{
                  type: "password",
                  placeholder: "Password",
                }}
              />
              <FormField
                label="Confirm Password"
                name="confirmPassword"
                formProps={{
                  type: "password",
                  placeholder: "Confirm Password",
                }}
              />
              <LoadingButton type="submit" isLoading={isSubmitting}>
                Signup
              </LoadingButton>
              <div className="divider divider-accent"></div>
              <p className="">
                Already have an account?{" "}
                <Link href="/register" className="text-blue-500">
                  Login -&gt;
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
const RegisterForm = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Register />
    </Suspense>
  );
};

export default RegisterForm;
