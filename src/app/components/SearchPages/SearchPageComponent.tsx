"use client";
import Link from "next/link";
import SearchBar from "../UI/SearchBar";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../UI/Loading";
import { usePathname } from "next/navigation";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { useSearchParams } from "next/navigation";
import {
  ClassInfo,
  QueryParams,
  RaceInfo,
  SearchFieldOption,
  SearchFieldOptions,
  SubClassInfo,
  SubclassSearchResults,
  SubRaceInfo,
} from "@/lib/types";
import { Background, Spell } from "@prisma/client";
import "@/lib/string.extensions";
import numPlace from "@/lib/utils/numPlace";
import { toSpellLevel } from "@/lib/utils/toSpellLevel";
import numberArray from "@/lib/utils/numberArray";

type DataType =
  | SubClassInfo
  | ClassInfo
  | Spell
  | Background
  | RaceInfo
  | SubRaceInfo
  | null;
type Priority = "all" | "sm" | "md" | "lg" | "xl";
type Modifier =
  | "Date"
  | "Bold"
  | "Button"
  | "CapitalCase"
  | "NumPlace"
  | "SpellLevel"
  | "Italic";
interface TableInfo {
  headerWidth: number;
  dbHeader: string | number;
  header: string;
  modifiers?: Modifier[];
  searchFields?: string[] | number[];
  includeOther?: boolean;
  enum?: boolean;
  index: number;
  priority: Priority;
}

interface Props<T extends DataType> {
  title: string;
  description: string;
  createText: string;
  homebrewOfficialText: string;
  searchPlaceholder: string;
  routeName: string;
  staticInput: T[];
  handleSearch: (query: QueryParams) => Promise<T[] | null>;
  table: TableInfo[];
  homebrew: boolean;
  // when you want to search through a different sql model
  //key is model name, data is the field to search
  relationalFields?: {
    index: number;
    model: string;
    key: string;
    alias?: string;
    modifiers?: Modifier[];
    headerWidth: number;
    priority: Priority;
  }[];
}

const SearchPageComponent = <T extends DataType>({
  staticInput,
  handleSearch,
  title,
  description,
  createText,
  homebrewOfficialText,
  table,
  searchPlaceholder,
  routeName,
  homebrew,
  relationalFields,
}: Props<T>) => {
  const params = useSearchParams();
  const [usingStaticData, setUsingStaticData] = useState(true);

  const [data, setData] = useState<T[]>(staticInput);
  const page =
    parseInt(params.get("page") || "0") >= 0
      ? parseInt(params.get("page") || "0")
      : 0;

  const [length, setLength] = useState(data.length);
  const pathname = usePathname();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    setLoadingPage(false);
  }, [params]);

  let count = -1;
  count += table.length;
  count += relationalFields?.length || 0;

  const homebrewOfficialRoute = homebrew
    ? `/${routeName}`
    : `/homebrew/${routeName}`;

  const createRoute = `/homebrew/${routeName}/create`;

  const tableRoute = (name: string) =>
    `/${routeName}/${name.replaceAll(" ", "-")}`;

  const generateSearchOptions = (): SearchFieldOptions[] => {
    const searchOptions: SearchFieldOptions[] = [];
    table.forEach((col) => {
      if (!col.searchFields) return;
      searchOptions.push({
        key: col.dbHeader,
        data: col.searchFields,
        enum: col.enum || false,
        numeric: typeof col.searchFields[0] === "number",
      });
    });
    return searchOptions;
  };

  const searchOptions = generateSearchOptions();

  const handleQuerySearch = async (query: QueryParams) => {
    setLoadingQuery(true);

    const res = await handleSearch(query);

    setLength(res ? res.length : 0);
    setData(res || []);
    setUsingStaticData(false);

    setLoadingQuery(false);

    return res ? res.length : 0;
  };

  const applyModifiers = (data: string, modifier: Modifier[], index = 0) => {
    switch (modifier[index]) {
      case "Date":
        return applyModifiers(
          new Date(data).toLocaleDateString(),
          modifier,
          index + 1
        );
      case "Bold":
        return <b>{applyModifiers(data, modifier, index + 1)}</b>;
      case "Button":
        return (
          <div className="btn btn-primary btn-xs h-auto p-1 ">
            {applyModifiers(data, modifier, index + 1)}
          </div>
        );
      case "CapitalCase":
        return applyModifiers(data.toCapitalCase(), modifier, index + 1);
      case "NumPlace":
        return applyModifiers(numPlace(parseInt(data)), modifier, index + 1);
      case "SpellLevel":
        return applyModifiers(toSpellLevel(data), modifier, index + 1);
      case "Italic":
        return <i>{applyModifiers(data, modifier, index + 1)}</i>;
    }
    return data;
  };

  return (
    <main className={`p-4 md:p-8 ${loading && "cursor-wait"}`}>
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>{title}</h1>
          <p className="italic">{description}</p>
        </div>

        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          {/* <Link
            href={homebrewOfficialRoute}
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
          >
            {homebrewOfficialText}
          </Link>
          <Link
            href={createRoute}
            className={"btn btn-ghost border border-gray-500 w-full"}
          >
            {createText}
          </Link> */}
        </div>
      </div>
      <div className="divider" />
      {/* search bar */}
      <SearchBar
        placeholder={searchPlaceholder}
        handleSearch={handleQuerySearch}
        searchFields={searchOptions}
        relationalFields={relationalFields}
        usingStaticData={usingStaticData}
      />
      {usingStaticData && (
        <div className="flex flex-row justify-between">
          <span className=" w-[100px]"></span>
          <div className="flex justify-center items-center pb-4">
            {page > 0 ? (
              <Link
                href={`${pathname}${page == 1 ? "" : `?page=${page - 1}`}`}
                onClick={() => setLoadingPage(true)}
              >
                <button className="btn btn-primary mr-2">&lt;-</button>
              </Link>
            ) : (
              <button className="btn btn-primary mr-2" disabled>
                &lt;-
              </button>
            )}
            {page != Math.floor(length / QUERY_LIMIT) ? (
              <Link
                href={`${pathname}${`?page=${page + 1}`}`}
                onClick={() => setLoadingPage(true)}
              >
                <button className="btn btn-primary">-&gt;</button>
              </Link>
            ) : (
              <button className="btn btn-primary" disabled>
                -&gt;
              </button>
            )}
          </div>
          <span className="text-xl font-bold flex justify-center items-center w-[100px]">
            {length == 0 ? 0 : page * QUERY_LIMIT + 1} -{" "}
            {page * QUERY_LIMIT + QUERY_LIMIT > length
              ? length
              : page * QUERY_LIMIT + QUERY_LIMIT}{" "}
          </span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table
          className={`table-zebra table-sm w-full table-pin-rows table-pin-cols`}
        >
          <thead>
            <tr>
              {numberArray(0, count).map((num) => {
                const col = table.find((col) => col.index === num);
                const relCol = relationalFields?.find(
                  (col) => col.index === num
                );
                if (col) {
                  return (
                    <th
                      key={num}
                      className={`text-left bg-black/20 w-[${
                        col.headerWidth
                      }%] ${
                        col.priority == "all"
                          ? ""
                          : col.priority == "sm"
                          ? "hidden sm:table-cell"
                          : col.priority == "md"
                          ? "hidden md:table-cell"
                          : col.priority == "lg"
                          ? "hidden lg:table-cell"
                          : "hidden xl:table-cell"
                      }`}
                    >
                      {col.header}
                    </th>
                  );
                } else if (relCol) {
                  return (
                    <th
                      key={num}
                      className={`text-left bg-black/20 w-[${
                        relCol.headerWidth
                      }%]  ${
                        relCol.priority == "all"
                          ? ""
                          : relCol.priority == "sm"
                          ? "hidden sm:table-cell"
                          : relCol.priority == "md"
                          ? "hidden md:table-cell"
                          : relCol.priority == "lg"
                          ? "hidden lg:table-cell"
                          : "hidden xl:table-cell"
                      }`}
                    >
                      {relCol.alias || relCol.key}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data && !loadingQuery && !loading && !loadingPage
              ? data.map((item, index) => {
                  if (count === -1) return null;

                  return (
                    <React.Fragment key={index}>
                      {item && (
                        <tr
                          className={`hover transition ease-in-out duration-50 ${
                            loading ? "cursor-wait" : "cursor-pointer"
                          } ${
                            Math.floor(index / QUERY_LIMIT) !== page && "hidden"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            //make mouse pointer turn to a loading icon
                            handleLoad();
                            router.push(tableRoute(item.name));
                          }}
                        >
                          {numberArray(0, count).map((num) => {
                            const col = table.find((col) => col.index === num);
                            const relCol = relationalFields?.find(
                              (col) => col.index === num
                            );
                            if (col) {
                              const hasHeader = item.hasOwnProperty(
                                col.dbHeader
                              );
                              if (hasHeader) {
                                // @ts-ignore
                                const data = applyModifiers(
                                  // @ts-ignore
                                  item[col.dbHeader],
                                  col.modifiers || []
                                );
                                // @ts-ignore
                                return (
                                  <td
                                    key={num}
                                    className={`${
                                      col.priority == "all"
                                        ? ""
                                        : col.priority == "sm"
                                        ? "hidden sm:table-cell"
                                        : col.priority == "md"
                                        ? "hidden md:table-cell"
                                        : col.priority == "lg"
                                        ? "hidden lg:table-cell"
                                        : "hidden xl:table-cell"
                                    }`}
                                  >
                                    <Link href={tableRoute(item.name)}>
                                      {data}
                                    </Link>
                                  </td>
                                );
                              }
                            } else if (relCol) {
                              const hasHeader = item.hasOwnProperty(
                                relCol.model
                              );
                              if (hasHeader) {
                                // @ts-ignore
                                const data = applyModifiers(
                                  // @ts-ignore
                                  item[relCol.model][relCol.key],
                                  relCol.modifiers || []
                                );
                                return (
                                  <td
                                    key={num}
                                    className={`${
                                      relCol.priority == "all"
                                        ? ""
                                        : relCol.priority == "sm"
                                        ? "hidden sm:table-cell"
                                        : relCol.priority == "md"
                                        ? "hidden md:table-cell"
                                        : relCol.priority == "lg"
                                        ? "hidden lg:table-cell"
                                        : "hidden xl:table-cell"
                                    }`}
                                  >
                                    {data}
                                  </td>
                                );
                              }
                              return null;
                            }
                          })}
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              : null}
          </tbody>
        </table>
        {(loadingQuery || loadingPage || loading) && <Loading />}
      </div>
      {!data && <Loading />}
    </main>
  );
};

export default SearchPageComponent;
