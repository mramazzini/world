import Loading from '@/components/UI/Loading';
import { DBMetadata } from '@/lib/types/metadata';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 } from 'uuid';
import LoadingButton from '../UI/Formik/LoadingButton';
import { debounce } from 'lodash';

interface Props {
  model: string;
  loading: boolean;
  metadata: DBMetadata[];
  show: boolean;
  setSelected: (selected: DBMetadata | null) => void;
  refresh?: () => void;
}

const SidebarMetaSelector = ({
  model,
  metadata,
  show,
  loading,
  setSelected,
  refresh,
}: Props) => {
  const [filtering, setFiltering] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<DBMetadata[]>(metadata);

  const fuse = useMemo(
    () =>
      new Fuse(metadata, {
        keys: [
          { name: 'name', weight: 1 },
          { name: 'description', weight: 0.33 },
          { name: 'flavorText', weight: 0.5 },
        ],
      }),
    [metadata]
  );

  const search = useCallback(
    (query: string) => {
      const results = fuse.search(query);
      const resultsParsed = results.map((item) => item.item);
      if (query === '') {
        setSearchResults(metadata);
        setFiltering(false);
        return;
      }
      setSearchResults(resultsParsed);
      setFiltering(false);
    },
    [fuse, metadata]
  );
  const debounceSearch = useMemo(
    () => debounce((query: string) => search(query), 500),
    [search]
  );
  useEffect(() => {
    setSearchResults(metadata);
  }, [metadata]);

  //close on escape
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [setSelected]);

  return (
    <>
      {show && (
        <div className="bg-black/50 fixed top-0 left-0 w-full h-full z-[99]"></div>
      )}
      <div
        className={`bg-base-200 h-screen w-[30rem] top-0 right-0 flex flex-col  z-[100]  ${
          show ? 'fixed ' : 'hidden'
        }`}
      >
        <div className="flex justify-center p-4">
          <h2 className="text-2xl text-center">Select a(n) {model}. </h2>

          <button
            onClick={() => setSelected(null)}
            className="btn btn-error btn-sm absolute top-4 right-4"
          >
            Close
          </button>
        </div>
        <div className="divider mt-0">
          <LoadingButton
            isLoading={loading}
            className="btn btn-primary btn-sm"
            onClick={refresh}
          >
            Refresh
          </LoadingButton>
        </div>
        <p className="text-xs text-center">
          {metadata.length} {model}s found.
        </p>
        <p className="text-xs text-center mb-4">
          Can&apos;t find what you&apos;re looking for?{' '}
          <span className="text-primary font-extrabold text-sm">
            {' '}
            Try refreshing the list.
          </span>
        </p>
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
                !filtering &&
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
                        href={`/${model}/${meta.slug}`}
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

          {(loading || filtering) && <Loading />}
        </div>

        <div className="flex justify-center my-4 flex-col items-center gap-4">
          <input
            type="text"
            value={searchValue}
            className="input input-primary input-bordered w-full max-w-xs min-h-12 "
            placeholder="Search"
            onChange={(e) => {
              e.preventDefault();
              setFiltering(true);
              setSearchValue(e.target.value);
              debounceSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SidebarMetaSelector;
