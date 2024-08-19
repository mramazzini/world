import RegisterForm from "@/app/components/auth/RegisterForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create an Account - Max's DND Wiki",
  description:
    "Create an account to create and store Classes, Subclasses, and more.",
};
const Page = () => {
  return (
    <main className="p-4 flex w-full justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Page;
