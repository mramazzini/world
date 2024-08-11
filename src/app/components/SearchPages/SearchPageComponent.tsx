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
import numberArray from "@/lib/utils/numberArray";
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
  index: number;
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
    index: number;
    model: string;
    key: string;
    alias?: string;
    modifiers?: Modifier[];
    headerWidth: number;
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
  let count = -1;
  count += table.length;
  count += relationalFields?.length || 0;
  console.log(count);
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
    <main className="p-4 md:p-8">
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
      <div className="overflow-x-auto">
        <table className="table-zebra table-sm w-full table-pin-rows table-pin-cols">
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
                      className={`text-left bg-black/20 w-[${col.headerWidth}%]`}
                    >
                      {col.header}
                    </th>
                  );
                } else if (relCol) {
                  return (
                    <th
                      key={num}
                      className={`text-left bg-black/20 w-[${relCol.headerWidth}%]`}
                    >
                      {relCol.alias || relCol.key}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                if (count === -1) return null;

                return (
                  <React.Fragment key={index}>
                    {item && (
                      <tr
                        className="cursor-pointer hover transition ease-in-out duration-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(tableRoute(item.name));
                        }}
                      >
                        {numberArray(0, count).map((num) => {
                          const col = table.find((col) => col.index === num);
                          const relCol = relationalFields?.find(
                            (col) => col.index === num
                          );
                          if (col) {
                            const hasHeader = item.hasOwnProperty(col.dbHeader);
                            if (hasHeader) {
                              // @ts-ignore
                              const data = applyModifiers(
                                // @ts-ignore
                                item[col.dbHeader],
                                col.modifiers || []
                              );
                              // @ts-ignore
                              return <td key={num}>{data}</td>;
                            }
                          } else if (relCol) {
                            const hasHeader = item.hasOwnProperty(relCol.model);
                            if (hasHeader) {
                              // @ts-ignore
                              const data = applyModifiers(
                                // @ts-ignore
                                item[relCol.model][relCol.key],
                                relCol.modifiers || []
                              );
                              return <td key={num}>{data}</td>;
                            }
                            return null;
                          }
                        })}
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
      {!data && <Loading />}
    </main>
  );
};

export default SearchPageComponent;
