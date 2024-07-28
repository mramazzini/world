import RegisterForm from "@/app/components/auth/RegisterForm";

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
