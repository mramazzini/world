import Loading from "@/app/components/UI/Loading";
import { DBMetadata } from "@/lib/utils/types/metadata";
import Link from "next/link";
import { useState } from "react";
import { v4 } from "uuid";

interface Props {
  model: string;
  loading: boolean;
  metadata: DBMetadata[];
  show: boolean;
  setSelected: (selected: DBMetadata | null) => void;
}

const SidebarMetaSelector = ({
  model,
  metadata,
  show,
  loading,
  setSelected,
}: Props) => {
  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 left-0 w-full h-full"></div>
      )}
      <div
        className={`bg-base-200 h-screen w-[30rem] top-0 right-0 flex flex-col   ${
          show ? "fixed " : "hidden"
        }`}
      >
        <h2 className="text-2xl p-4">Select a {model} for your character.</h2>
        <div className="bg-base-100 max-h-full grow  overflow-y-auto  overflow-x-visible">
          <table className="table table-zebra table-xs  p-4  table-pin-rows">
            <thead>
              <tr className="bg-base-300">
                <th>Name</th>
                <th>Description</th>
                <th>Read More</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                metadata.map((meta) => (
                  <tr
                    key={v4()}
                    onClick={() => setSelected(meta)}
                    className="hover cursor-pointer"
                  >
                    <td onClick={() => setSelected(meta)} className="font-bold">
                      {model === "class"
                        ? meta.name.toCapitalCase()
                        : meta.name}
                    </td>
                    <td className="w-[60%]">{meta.flavorText}</td>
                    <td className="w-[25%]">
                      <Link
                        className="btn btn-accent  btn-xs "
                        href={`/${model}/${meta.name.replaceAll(" ", "-")}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read More -&gt;
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center m-2">
          <button className="btn btn-primary" onClick={() => setSelected(null)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarMetaSelector;
