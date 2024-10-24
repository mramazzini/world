import Loading from '@/components/UI/Loading';
import { DBMetadata } from '@/lib/utils/types/metadata';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

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
  const [searchResults, setSearchResults] = useState<DBMetadata[]>(metadata);
  const search = async (query: string) => {
    const fuse = new Fuse(metadata, {
      keys: [
        { name: 'name', weight: 1 },
        { name: 'description', weight: 0.33 },
        { name: 'flavorText', weight: 0.5 },
      ],
    });
    const results = fuse.search(query);
    const resultsParsed = results.map((item) => item.item);
    if (query === '') return setSearchResults(metadata);
    setSearchResults(resultsParsed);
  };

  useEffect(() => {
    setSearchResults(metadata);
  }, [metadata]);
  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 left-0 w-full h-full"></div>
      )}
      <div
        className={`bg-base-200 h-screen w-[30rem] top-0 right-0 flex flex-col   ${
          show ? 'fixed ' : 'hidden'
        }`}
      >
        <h2 className="text-2xl p-4 text-center">
          Select a {model} for your character.
        </h2>
        <div className="divider">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </div>
        <div className="bg-base-100 max-h-full grow  overflow-y-auto  overflow-x-visible border-b">
          <table className="table table-zebra table-xs  p-4  table-pin-rows">
            <thead>
              <tr className="bg-base-300">
                <th>Name</th>
                <th>Description</th>
                <th>Read More</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                searchResults.map((meta) => (
                  <tr
                    key={v4()}
                    onClick={() => setSelected(meta)}
                    className="hover cursor-pointer"
                  >
                    <td onClick={() => setSelected(meta)} className="font-bold">
                      {model === 'class'
                        ? meta.name.toCapitalCase()
                        : meta.name}
                    </td>
                    <td className="w-[60%]">{meta.flavorText}</td>
                    <td className="w-[25%]">
                      <Link
                        className="btn btn-accent  btn-xs "
                        href={`/${model}/${meta.name.replaceAll(' ', '-')}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read More -&gt;
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {loading && <Loading />}
        </div>

        <div className="flex justify-center my-4 flex-col items-center gap-4">
          <input
            type="text"
            className="input input-primary input-bordered w-full max-w-xs min-h-12 "
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SidebarMetaSelector;
