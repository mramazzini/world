"use client";
import { QUERY_LIMIT } from "@/lib/globalVars";
import {
  QueryParams,
  RelationFieldOptions,
  SearchFieldOption,
  SearchFieldOptions,
} from "@/lib/types";
import { useState, useEffect, useRef } from "react";
import "@/lib/string.extensions";
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
  }[];
}

const SearchBar = ({
  handleSearch,
  setLoading,
  placeholder,
  searchFields,
  relationalFields,
}: Props) => {
  const [queryInfo, setQuery] = useState<QueryParams>({
    query: "",
    index: 0,
    searchFields: [],
    relationalFields: [],
  });

  useEffect(() => {
    componentSearch(queryInfo);
  }, []);

  const [length, setLength] = useState<number | "loading">(0);

  const componentSearch = async (query: QueryParams) => {
    setLoading && setLoading(true);
    const res = await handleSearch(query);
    setLength(res);
    console.log(res);
    setLoading && setLoading(false);
  };

  const handlePageChange = (index: number) => {
    if (queryInfo.index < 0) return;
    setQuery({ ...queryInfo, index });
    setLength("loading");
    componentSearch({ ...queryInfo, index });
  };

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setQuery({ ...queryInfo, index: 0 });
          componentSearch(queryInfo);
        }}
      >
        <div className="flex justify-center items-center pb-4">
          <input
            placeholder={placeholder || "Search"}
            className="input input-primary w-1/2"
            value={queryInfo.query}
            onChange={(e) =>
              setQuery({
                ...queryInfo,
                query: e.target.value,
              })
            }
          />
          <button type="submit" className="ml-2 btn btn-accent">
            Search
          </button>
        </div>
        <div className="flex flex-row justify-center bg-neutral rounded-xl p-4 mb-4">
          {/* advanced search */}
          {searchFields &&
            searchFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col mx-4 text-neutral-content text-center"
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
                          enum: searchFields[index].enum,
                        },
                      ],
                    });
                  }}
                >
                  <option value={field.numeric ? -1 : field.enum ? "NONE" : ""}>
                    Any
                  </option>
                  {field.data &&
                    field.data.map((value, index) => (
                      <option key={index} value={value}>
                        {value.toString().toCapitalCase()}
                      </option>
                    ))}
                </select>
              </div>
            ))}
          {relationalFields &&
            relationalFields.map((field, index) => (
              <div
                key={index}
                className="flex flex-col mx-4 text-neutral-content text-center"
              >
                <label>
                  {field.alias ? field.alias : field.key.camelToCapitalCase()}
                </label>
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
                />
              </div>
            ))}
        </div>
      </form>
      <div className="flex flex-row justify-between">
        <span className=" w-[100px]"></span>
        <div className="flex justify-center items-center pb-4">
          <button
            onClick={() => handlePageChange(queryInfo.index - 1)}
            className="btn btn-primary mr-2"
            disabled={queryInfo.index == 0}
          >
            &lt;-
          </button>
          <button
            onClick={() => {
              handlePageChange(queryInfo.index + 1);
            }}
            className="btn btn-primary"
            disabled={length != QUERY_LIMIT}
          >
            -&gt;
          </button>
        </div>

        <span className="text-xl font-bold flex justify-center items-center w-[100px]">
          {length == 0 ? 0 : queryInfo.index * QUERY_LIMIT + 1} -{" "}
          {length == "loading" ? (
            <span className="loading"></span>
          ) : (
            queryInfo.index * QUERY_LIMIT + length
          )}{" "}
        </span>
      </div>
    </>
  );
};

export default SearchBar;
