"use client";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { QueryParams, SearchFieldOptions } from "@/lib/types";
import { useState, useEffect, useRef } from "react";
import "@/lib/string.extensions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  //returns number of results
  // this is to disable the next button when there are no more results
  handleSearch: (query: QueryParams) => Promise<number>;
  //Optional function to set loading state
  setLoading?: (loading: boolean) => void;
  placeholder?: string;
  searchFields?: SearchFieldOptions[];
  relationalFields?: {
    model: string;
    key: string;
    alias?: string;
    options?: string[];
  }[];
  usingStaticData: boolean;
}

const SearchBar = ({
  handleSearch,
  setLoading,
  placeholder,
  searchFields,
  relationalFields,
  usingStaticData,
}: Props) => {
  const [queryInfo, setQuery] = useState<QueryParams>({
    query: "",
    page: 0,
    searchFields: [],
    relationalFields: [],
  });
  const [currentQueryString, setCurrentQueryString] = useState("");
  const [length, setLength] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const componentSearch = async (query: QueryParams) => {
    setLoading && setLoading(true);
    router.push(pathname);
    const res = await handleSearch(query);
    setLength(res);

    setLoading && setLoading(false);
  };

  const handlePageChange = (newPage: number) => {
    console.log(newPage);
    if (newPage < 0 || (length < QUERY_LIMIT && newPage > queryInfo.page))
      return;

    setQuery({ ...queryInfo, page: newPage });
    componentSearch({ ...queryInfo, page: newPage });
    console.log({ ...queryInfo, page: newPage });
  };

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setQuery({ ...queryInfo, page: 0, query: currentQueryString });

          componentSearch({ ...queryInfo, page: 0, query: currentQueryString });
        }}
      >
        <div className="flex justify-center items-center pb-4 join">
          <input
            placeholder={placeholder || "Search"}
            className="input input-primary w-1/2 join-item"
            value={currentQueryString}
            onChange={(e) => setCurrentQueryString(e.target.value)}
          />
          <button type="submit" className="ml-2 btn btn-accent join-item">
            Search
          </button>
        </div>
        <div className="flex flex-col  md:flex-row justify-center items-center bg-neutral rounded-xl p-4 mb-4">
          {/* advanced search */}
          {searchFields &&
            searchFields.map((field, page) => (
              <div
                key={page}
                className="flex flex-col mx-4 text-neutral-content text-center p-2"
              >
                <label>
                  {typeof field.key == "number"
                    ? field.key.toString().camelToCapitalCase()
                    : field.key.camelToCapitalCase()}
                </label>
                <select
                  className="input input-primary w-40 bg-neutral"
                  onChange={(e) => {
                    const newQuery = queryInfo.searchFields.filter(
                      (searchField) => searchField.key !== field.key
                    );
                    setQuery({
                      ...queryInfo,
                      searchFields: [
                        ...newQuery,
                        {
                          key: field.key,
                          data: e.target.value,
                          enum: searchFields[page].enum,
                        },
                      ],
                    });
                  }}
                >
                  <option value={field.numeric ? -1 : field.enum ? "NONE" : ""}>
                    Any
                  </option>
                  {field.data &&
                    field.data.map((value, page) => (
                      <option key={page} value={value}>
                        {value.toString().toCapitalCase().replaceAll("_", " ")}
                      </option>
                    ))}
                </select>
              </div>
            ))}
          {relationalFields &&
            relationalFields.map((field, page) => (
              <div
                key={page}
                className="flex flex-col mx-4 text-neutral-content text-center"
              >
                <label>
                  {field.alias ? field.alias : field.key.camelToCapitalCase()}
                </label>
                {field.options ? (
                  <select
                    className="input input-primary w-40 bg-neutral"
                    onChange={(e) => {
                      const newQuery = queryInfo.relationalFields.filter(
                        (relationalField) => relationalField.key !== field.key
                      );
                      setQuery({
                        ...queryInfo,
                        relationalFields: [
                          ...newQuery,
                          {
                            model: field.model,
                            key: field.key,
                            data: e.target.value,
                          },
                        ],
                      });
                    }}
                  >
                    <option value="">Any</option>
                    {field.options.map((value, page) => (
                      <option key={page} value={value}>
                        {value.toString().toCapitalCase()}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input
                      className="input input-primary w-40 bg-neutral"
                      onChange={(e) => {
                        const newQuery = queryInfo.relationalFields.filter(
                          (relationalField) => relationalField.key !== field.key
                        );
                        setQuery({
                          ...queryInfo,
                          relationalFields: [
                            ...newQuery,
                            {
                              model: field.model,
                              key: field.key,
                              data: e.target.value,
                            },
                          ],
                        });
                      }}
                    />{" "}
                  </>
                )}
              </div>
            ))}
        </div>
      </form>
      {!usingStaticData && (
        <div className="flex flex-row justify-between">
          <span className=" w-[100px]"></span>
          <div className="flex justify-center items-center pb-4">
            <button
              disabled={queryInfo.page == 0}
              className="btn btn-primary mr-2"
              onClick={() => handlePageChange(queryInfo.page - 1)}
            >
              &lt;-
            </button>

            <button
              disabled={length < QUERY_LIMIT}
              className="btn btn-primary"
              onClick={() => handlePageChange(queryInfo.page + 1)}
            >
              -&gt;
            </button>
          </div>
          <span className="text-xl font-bold flex justify-center items-center w-[100px]">
            {length == 0 ? 0 : queryInfo.page * QUERY_LIMIT + 1} -{" "}
            {length + QUERY_LIMIT * queryInfo.page}
          </span>
        </div>
      )}
    </>
  );
};

export default SearchBar;
