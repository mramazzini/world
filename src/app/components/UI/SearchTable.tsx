"use client";
import { searchEverything } from "@/lib/actions/db/general/read.actions";
import { CombinedData, QueryParams } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "@/lib/string.extensions";
import Link from "next/link";
const SearchTable = () => {
  const params = useSearchParams();
  const query = params.get("query") || "";
  const page = params.get("page") || "0";
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState<null | CombinedData[]>(null);

  const tableRoute = (routeName: string, name: string) =>
    `/${routeName}/${name.replaceAll(" ", "-")}`;
  useEffect(() => {
    const req: QueryParams = {
      query,
      page: parseInt(page),
      searchFields: [],
      relationalFields: [],
    };
    searchEverything(req).then((res) => {
      setData(res);
      console.log(res);
    });
  }, [query, page]);
  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <>
      <div className="overflow-x-auto h-[60vh] overflow-y-scroll">
        <table
          className={`table-zebra table-sm w-full table table-link table-pin-rows`}
        >
          <thead>
            <tr>
              <th className="w-[15%] text-left bg-black/20">Name</th>
              <th className="text-left bg-black/20 ">Description</th>
              <th className="w-[10%] text-left bg-black/20 md:table-cell hidden">
                Type
              </th>
              <th className="w-[10%] text-left bg-black/20 md:table-cell hidden">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              data?.map((item, index) => (
                <tr
                  key={index}
                  className={`hover transition ease-in-out duration-50 ${
                    loading ? "cursor-wait" : "cursor-pointer"
                  } `}
                  onClick={(e) => {
                    e.stopPropagation();
                    //make mouse pointer turn to a loading icon
                    handleLoad();
                    router.push(
                      tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )
                    );
                  }}
                >
                  <td>
                    <Link
                      href={tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )}
                    >
                      <div className="btn btn-primary btn-xs h-auto p-1 ">
                        {item.type === "Class"
                          ? item.name.toCapitalCase()
                          : item.name}
                      </div>
                    </Link>
                  </td>
                  <td className="hidden lg:table-cell">
                    <Link
                      href={tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )}
                    >
                      {item.flavorText.length < 200
                        ? item.flavorText
                        : item.flavorText.slice(0, 200) + "..."}
                    </Link>
                  </td>
                  <td className="lg:hidden  ">
                    <Link
                      href={tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )}
                    >
                      {item.flavorText.length < 100
                        ? item.flavorText
                        : item.flavorText.slice(0, 100) + "..."}
                    </Link>
                  </td>
                  <td className="md:table-cell hidden">
                    <Link
                      href={tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )}
                    >
                      <div className="btn btn-accent btn-xs h-auto p-1 ">
                        {item.type}
                      </div>
                    </Link>
                  </td>
                  <td className="md:table-cell hidden">
                    <Link
                      href={tableRoute(
                        item.type.toLowerCase(),
                        item.name.replaceAll(" ", "-")
                      )}
                    >
                      {item.lastUpdated &&
                        item.lastUpdated.toLocaleDateString()}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {(!data || loading) && <Loading />}
      </div>
    </>
  );
};

export default SearchTable;
