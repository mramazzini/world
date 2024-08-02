import Link from "next/link";

const Page = () => {
  return (
    <div className="p-4">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p> <br />
      <Link className="btn btn-primary" href="/">
        Go back to the homepage -&gt;
      </Link>
    </div>
  );
};
export default Page;
