"use client";

import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

interface Props {
  small?: boolean;
}

const HomeSearchBar = ({ small }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const [currentQueryString, setCurrentQueryString] = useState(
    pathname === "/search" ? params.get("query") || "" : ""
  );
  console.log(small);
  if (small)
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/search?query=${currentQueryString}`);
        }}
        className="flex justify-center items-center  join"
      >
        <input
          placeholder={"Search for anything..."}
          className="input input-primary w-48 join-item input-sm"
          value={currentQueryString}
          onChange={(e) => setCurrentQueryString(e.target.value)}
        />
        <Link
          className="ml-2 btn btn-accent join-item btn-sm"
          href={`/search?query=${currentQueryString}`}
        >
          Search
        </Link>
      </form>
    );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?query=${currentQueryString}`);
      }}
      className="flex justify-center items-center pb-4 join "
    >
      <input
        placeholder={"Search for anything..."}
        className="input input-primary w-96 join-item"
        value={currentQueryString}
        onChange={(e) => setCurrentQueryString(e.target.value)}
      />
      <Link
        className="ml-2 btn btn-accent join-item"
        href={`/search?query=${currentQueryString}`}
      >
        Search
      </Link>
    </form>
  );
};

export default HomeSearchBar;
