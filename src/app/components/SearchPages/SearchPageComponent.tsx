"use client";
import Link from "next/link";
import SearchBar from "../UI/SearchBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../UI/Loading";
import {
  ClassInfo,
  QueryParams,
  SearchFieldOption,
  SearchFieldOptions,
  SubClassInfo,
  SubclassSearchResults,
} from "@/lib/types";
import { Spell } from "@prisma/client";
import "@/lib/string.extensions";
import numPlace from "@/lib/utils/numPlace";
import { toSpellLevel } from "@/lib/utils/toSpellLevel";
type DataType = SubClassInfo | ClassInfo | Spell | SubclassSearchResults | null;

type Modifier =
  | "Date"
  | "Bold"
  | "Link"
  | "CapitalCase"
  | "NumPlace"
  | "SpellLevel";
interface TableInfo {
  headerWidth: number;
  dbHeader: string | number;
  header: string;
  modifiers?: Modifier[];
  searchFields?: string[] | number[];
  includeOther?: boolean;
  enum?: boolean;
}

interface Props<T extends DataType> {
  title: string;
  description: string;
  createText: string;
  homebrewOfficialText: string;
  searchPlaceholder: string;
  routeName: string;
  data: T[] | null;
  handleSearch: (query: QueryParams) => Promise<number>;
  table: TableInfo[];
  homebrew: boolean;
  // when you want to search through a different sql model
  //key is model name, data is the field to search
  relationalFields?: {
    model: string;
    key: string;
    alias?: string;
  }[];
}

const SearchPageComponent = <T extends DataType>({
  data,
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
  const router = useRouter();

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

  const applyModifiers = (data: string, modifier: Modifier[], index = 0) => {
    switch (modifier[index]) {
      case "Date":
        return applyModifiers(
          new Date(data).toLocaleDateString(),
          modifier,
          index + 1
        );
      case "Bold":
        return (
          <b className="btn btn-primary  btn-xs h-auto ">
            {applyModifiers(data, modifier, index + 1)}
          </b>
        );
      case "Link":
        return (
          <Link href={data} className="">
            {applyModifiers(data, modifier, index + 1)}
          </Link>
        );
      case "CapitalCase":
        return applyModifiers(data.toCapitalCase(), modifier, index + 1);
      case "NumPlace":
        return applyModifiers(numPlace(parseInt(data)), modifier, index + 1);
      case "SpellLevel":
        return applyModifiers(toSpellLevel(data), modifier, index + 1);
    }
    return data;
  };

  return (
    <main className="p-8">
      {/* Homebrew */}
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>{title}</h1>
          <p className="italic">{description}</p>
        </div>

        <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
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
          </Link>
        </div>
      </div>
      <div className="divider" />
      {/* search bar */}
      <SearchBar
        placeholder={searchPlaceholder}
        handleSearch={handleSearch}
        searchFields={searchOptions}
        relationalFields={relationalFields}
      />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            {table.map((col, index) => (
              <th
                key={index}
                className={`text-left bg-black/20 w-[${col.headerWidth}%]`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <React.Fragment key={index}>
                {item && (
                  <tr
                    className="cursor-pointer hover transition ease-in-out duration-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(tableRoute(item.name));
                    }}
                  >
                    {table.map((col, index) => {
                      const hasHeader = item.hasOwnProperty(col.dbHeader);

                      if (hasHeader) {
                        // @ts-ignore
                        const data = applyModifiers(
                          // @ts-ignore
                          item[col.dbHeader],
                          col.modifiers || []
                        );
                        // @ts-ignore
                        return <td key={index}>{data}</td>;
                      }
                      return null;
                    })}
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </table>{" "}
      {!data && <Loading />}
    </main>
  );
};

export default SearchPageComponent;
