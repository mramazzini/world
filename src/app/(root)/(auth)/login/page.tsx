// import LoginForm from "@/src/components/LoginForm";
import LoginForm from "@/app/components/auth/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-4 flex w-full justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
