import { SidebarDisplayData } from '@/lib/types/types';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useState } from 'react';

interface SidebarSelectorProps {
  data: SidebarDisplayData;
  onSelect: (id: string | null) => void;
  show: boolean;
  description: string;
  baseLink?: string;
}

const SidebarSelector: React.FC<SidebarSelectorProps> = ({
  data,
  onSelect,
  show,
  description,
  baseLink,
}) => {
  const [searchResults, setSearchResults] = useState<SidebarDisplayData>(data);
  const search = async (query: string) => {
    const fuse = new Fuse(data, {
      keys: [
        { name: 'name', weight: 1 },
        { name: 'description', weight: 0.33 },
      ],
    });
    const results = fuse.search(query);
    const resultsParsed = results.map((item) => item.item);
    if (query === '') return setSearchResults(data);
    setSearchResults(resultsParsed);
  };

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
        <h2 className="text-2xl p-4 text-center">{description}</h2>
        <div className="divider">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onSelect(null)}
          >
            Close
          </button>
        </div>
        <div className="bg-base-100 max-h-full grow  overflow-y-auto  overflow-x-visible border-b">
          <table className="table table-zebra table-xs  p-4  table-pin-rows">
            <thead>
              <tr className="bg-base-300">
                <th>Name</th>
                {searchResults.some(
                  (meta) => meta.description !== undefined
                ) && <th>Description</th>}
                {baseLink && <th>Read More</th>}
              </tr>
            </thead>
            <tbody>
              {searchResults.map((meta) => (
                <tr
                  key={meta.id}
                  onClick={() => onSelect(meta.id)}
                  className="hover cursor-pointer"
                >
                  <td onClick={() => onSelect(meta.id)} className="font-bold">
                    {meta.name}
                  </td>
                  {meta.description && (
                    <td className="w-[60%]">{meta.description}</td>
                  )}
                  {baseLink && (
                    <td className="w-[25%]">
                      <Link
                        className="btn btn-accent  btn-xs "
                        href={`/${baseLink}/${meta.name.replaceAll(' ', '-')}`}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read More -&gt;
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
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

export default SidebarSelector;
