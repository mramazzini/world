"use client";
import { Suspense, useState } from "react";
import SearchTable from "../../UI/SearchTable";
import HomeSearchBar from "../../UI/HomeSearchBar";

const HomeSearchPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <main className={`p-4 md:p-8 ${loading && "cursor-wait"}`}>
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Search</h1>
          <p className="italic">
            Use this page to search for anything across this wiki.
          </p>
        </div>
      </div>
      <div className="divider" />
      <HomeSearchBar />
      <Suspense>
        <SearchTable />
      </Suspense>
    </main>
  );
};

export default HomeSearchPage;
