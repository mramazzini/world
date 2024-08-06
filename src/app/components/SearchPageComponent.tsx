"use client";
import Link from "next/link";
import SearchBar from "./UI/SearchBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./UI/Loading";
import { ClassInfo, SubClassInfo, SubclassSearchResults } from "@/lib/types";
import { Spell } from "@prisma/client";
import "@/lib/string.extensions";
type DataType = SubClassInfo | ClassInfo | Spell | SubclassSearchResults | null;

interface Props<T extends DataType> {
  title: string;
  description: string;
  createText: string;
  homebrewOfficialText: string;
  searchPlaceholder: string;
  routeName: string;
  data: T[] | null;
  handleSearch: (index: number, query: string) => Promise<number>;
  tableHeaders: string[];
  dataHeaders: string[];
  headerSizes: number[];
  homebrew: boolean;
}

const SearchPageComponent = <T extends DataType>({
  data,
  tableHeaders,
  headerSizes,
  handleSearch,
  title,
  description,
  createText,
  homebrewOfficialText,
  dataHeaders,
  searchPlaceholder,
  routeName,
  homebrew,
}: Props<T>) => {
  const router = useRouter();

  const homebrewOfficialRoute = homebrew
    ? `/${routeName}`
    : `/homebrew/${routeName}`;

  const createRoute = `/homebrew/${routeName}/create`;

  const tableRoute = (name: string) =>
    `/${routeName}/${name.replaceAll(" ", "-")}`;

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
      <SearchBar placeholder={searchPlaceholder} handleSearch={handleSearch} />
      <table className="table-zebra table-sm w-full">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={header}
                className={`text-left bg-black/20 w-[${headerSizes[index]}%]`}
              >
                {header}
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
                    className="cursor-pointer hover"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(tableRoute(item.name));
                    }}
                  >
                    {dataHeaders.map((header, index) => {
                      const hasHeader = item.hasOwnProperty(header);
                      if (hasHeader) {
                        // @ts-ignore
                        if (header === "updatedAt") {
                          // @ts-ignore
                          return (
                            <td key={header}>
                              {/* @ts-ignore */}
                              {new Date(item[header]).toLocaleDateString()}
                            </td>
                          );
                        }
                        if (index === 0) {
                          return (
                            <td key={header}>
                              <p className="text-accent font-bold">
                                {/* @ts-ignore */}
                                {item[header]}
                              </p>
                            </td>
                          );
                        }
                        // @ts-ignore
                        return <td key={header}>{item[header]}</td>;
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
