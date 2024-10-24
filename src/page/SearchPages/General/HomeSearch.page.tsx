'use client';
import { Suspense } from 'react';
import SearchTable from '@/components/UI/SearchTable';
import HomeSearchBar from '@/components/UI/HomeSearchBar';

const HomeSearchPage = () => {
  return (
    <main className={`p-4 md:p-8`}>
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
      <Suspense>
        <HomeSearchBar />
        <SearchTable />
      </Suspense>
    </main>
  );
};

export default HomeSearchPage;
