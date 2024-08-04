"use client";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { useState, useEffect } from "react";

interface Props {
  //returns number of results
  // this is to disable the next button when there are no more results
  handleSearch: (index: number, query: string) => Promise<number>;
  //Optional function to set loading state
  setLoading?: (loading: boolean) => void;
}

const SearchBar = ({ handleSearch, setLoading }: Props) => {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState<number | "loading">(0);

  useEffect(() => {
    componentSearch(index, query);
  }, [index]);

  const componentSearch = async (index: number, query: string) => {
    setLoading && setLoading(true);
    const res = await handleSearch(index, query);
    setLength(res);
    setLoading && setLoading(false);
  };

  const handlePageChange = (index: number) => {
    if (index < 0) return;
    setIndex(index);
    setLength("loading");
  };

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIndex(0);
          componentSearch(index, query);
        }}
        className="flex justify-center items-center pb-4"
      >
        <input
          type="text"
          placeholder="Search for a subclass..."
          className="input input-primary w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="ml-2 btn btn-accent">
          Search
        </button>
      </form>

      <div className="flex flex-row justify-between">
        <span className=" w-[100px]"></span>
        <div className="flex justify-center items-center pb-4">
          <button
            onClick={() => handlePageChange(index - 1)}
            className="btn btn-primary mr-2"
            disabled={index === 0}
          >
            &lt;-
          </button>
          <button
            onClick={() => {
              handlePageChange(index + 1);
            }}
            className="btn btn-primary"
            disabled={length != QUERY_LIMIT}
          >
            -&gt;
          </button>
        </div>
        <span className="text-xl font-bold flex justify-center items-center w-[100px]">
          {length == 0 ? 0 : index * QUERY_LIMIT + 1} -{" "}
          {length == "loading" ? (
            <span className="loading"></span>
          ) : (
            index * QUERY_LIMIT + length
          )}{" "}
        </span>
      </div>
    </>
  );
};

export default SearchBar;
