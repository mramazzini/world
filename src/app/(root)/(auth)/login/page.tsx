// import LoginForm from "@/src/components/LoginForm";
import LoginForm from '@/components/Forms/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login - Max's DND",
  description: 'Login to your account to create and access your saved content.',
  openGraph: {
    type: 'website',

    title: "Login - Max's DND",
    description:
      'Login to your account to create and access your saved content.',
    images: [
      {
        url: 'https://www.maxdnd.com/images/hero.jpg',
        width: 1440,
        height: 1920,
        alt: 'Dungeons and Dragons Fire Dragon Attack',
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="p-4 flex w-full justify-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
