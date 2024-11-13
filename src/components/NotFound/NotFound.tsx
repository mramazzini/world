import Link from 'next/link';

const NotFound = ({
  message,
  redirect,
  redirectText,
}: {
  message: string;
  redirect: string;
  redirectText: string;
}) => {
  return (
    <div className="p-8">
      <h1 className="divider">404 Not Found</h1>
      <div className="bg-base-300 p-4 flex gap-4 flex-col items-center mt-8 w-full justify-center">
        <p>{message}</p>
        <div className="flex flex-row gap-4 items-center justify-center w-full h-24">
          <div className="w-full flex  justify-end">
            <Link href={redirect} className="link hover:link-primary">
              {redirectText} -&gt;
            </Link>
          </div>
          <div className="divider divider-horizontal">or</div>
          <div className="w-full flex  justify-start">
            <Link href="/" className="link hover:link-primary">
              Go Home -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
