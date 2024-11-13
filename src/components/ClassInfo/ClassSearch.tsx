'use client';

import { ClassInfo } from '@/lib/types/modelInfo';
import Loading from '../UI/Loading';
import '@/lib/string.extensions';
import Link from 'next/link';
interface Props {
  classes: ClassInfo[];
}

const ClassSearch = ({ classes }: Props) => {
  const loading = false;

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col md:w-4/5 ">
          <h1>Official Classes</h1>
          <p className="italic ">
            Classes are your characters profession. They are the backbone of
            your character and determine what abilities you have access to. As
            you level up, you will gain new abilities and features through your
            class.
          </p>
        </div>
        {/* <div className="flex justify-center items-start md:items-end my-2 flex-col ">
          <Link
            href={`/homebrew/class`}
            className={"btn btn-ghost border border-gray-500 mb-2 w-full"}
          >
            View Homebrew Classes -&gt;
          </Link>
          <Link
            href={"/homebrew/class/create"}
            className={"btn btn-ghost border border-gray-500 w-full"}
          >
            Create a Class -&gt;
          </Link>
        </div> */}
      </div>
      <div className="divider" />
      {/* <Link className="btn btn-primary" href={"/class/create"}>
        Create Class
      </Link> */}

      <table className="table table-zebra table-sm w-full table-link">
        <thead>
          <tr>
            <th className="text-left bg-black/20 w-[5%] ">Name</th>
            <th className="text-left bg-black/20 w-[50%] hidden md:table-cell">
              Description
            </th>
            <th className="text-left bg-black/20 w-[20%] hidden md:table-cell">
              Subclass
            </th>
            <th className="text-left bg-black/20 w-[10%] ">Source</th>
            <th className="text-left bg-black/20 w-[10%] hidden sm:table-cell">
              Last Updated
            </th>
          </tr>
        </thead>

        <tbody>
          {classes.map((item, index) => {
            if (item.userId) return null;
            return (
              <tr
                key={index}
                className={`hover transition ease-in-out duration-50`}
              >
                <td>
                  <Link href={`/class/${item.slug}`}>
                    <p className="btn btn-xs btn-primary h-auto font-bold">
                      {item.name}
                    </p>
                  </Link>
                </td>
                <td className="hidden md:table-cell ">
                  <Link href={`/class/${item.slug}`}>
                    <p className="italic line-clamp-2 "> {item.flavorText}</p>
                  </Link>
                </td>
                <td className={` hidden md:table-cell `}>
                  <p className=" badge badge-accent  h-auto  font-bold ">
                    {item.subClassName}
                  </p>
                </td>

                <td>
                  <Link href={`/class/${item.slug}`}>{item.source}</Link>
                </td>
                <td className="hidden sm:table-cell">
                  <Link href={`/class/${item.slug}`}>
                    {item.updatedAt.getMonth()}/{item.updatedAt.getDate()}/
                    {item.updatedAt.getFullYear()}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <Loading />}
    </main>
  );
};

export default ClassSearch;
