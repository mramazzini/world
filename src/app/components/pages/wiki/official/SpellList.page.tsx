"use client";
import { Fragment, useState } from "react";
import { SpellListInfo } from "@/lib/utils/types/types";
import Loading from "../../../UI/Loading";
import Link from "next/link";
import "@/lib/string.extensions";
import { useRouter } from "next/navigation";

import NewLineParse from "../../../Utility/NewLineParse";
import numberArray from "@/lib/utils/numberArray";
import P from "@/app/components/Utility/FormatAndSanitize";
import numPlace from "@/lib/utils/numPlace";
import { AssociatedModel } from "@prisma/client";
import CommentSection from "@/app/components/CommentSection/CommentSection";

interface Props {
  spellList: SpellListInfo | null;
}
const SpellListPage = ({ spellList }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <main className={`p-4 md:p-8 ${loading && "cursor-wait"}`}>
      {!spellList && <Loading />}
      {spellList && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>
                Spell List: {spellList.name.toCapitalCase() || "Class Name"}
              </h1>
              <p className="italic pr-4">
                <NewLineParse>
                  {spellList.description ||
                    "Your Class Description will go here."}
                </NewLineParse>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/spell-list`}
              >
                View all SpellLists -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bg-base-300 p-4  rounded-t-box hidden lg:block">
            <div className="bg-base-300 pt-4 rounded-t-box">
              <div role="tablist" className="tabs tabs-lifted">
                {numberArray(0, 9).map((num, index) => (
                  <Fragment key={`${num}-${index}`}>
                    <input
                      type="radio"
                      name="spell-level-tabs-lg"
                      role="tab"
                      className="tab hidden lg:inline-flex "
                      aria-label={num === 0 ? "Cantrips" : `${numPlace(num)}`}
                      onClick={() => setActiveTab(num)}
                      defaultChecked={num === 0}
                    />
                    <div
                      role="tabpanel"
                      className={`bg-base-100 rounded-box tab-content p-6 ${
                        activeTab === 0 ? "rounded-t-[0]" : ""
                      }`}
                    >
                      <table className="table w-full table-zebra overflow-hidden table-link">
                        <thead>
                          <tr className="bg-black/30">
                            <th className="w-[20%]">Name</th>
                            <th className="w-[20%]">Range</th>
                            <th className="w-[20%] hidden md:table-cell">
                              Duration
                            </th>
                            <th className="w-[20%] hidden lg:table-cell">
                              Casting Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {spellList.Spells.filter(
                            (spell) => spell.level == activeTab
                          ).map((spell, index) => (
                            <tr
                              key={`${spell.name}-${index}`}
                              onClick={() => {
                                handleLoading();
                                router.push(
                                  `/spells/${spell.name.replaceAll(" ", "-")}`
                                );
                              }}
                              className={`hover ${
                                loading ? "cursor-wait" : "cursor-pointer"
                              }`}
                            >
                              <td>
                                <Link
                                  href={`/spells/${spell.name.replaceAll(
                                    " ",
                                    "-"
                                  )}`}
                                >
                                  <P>{`%${spell.id}{${spell.name}}%`}</P>
                                </Link>
                              </td>
                              <td>
                                {" "}
                                <Link
                                  href={`/spells/${spell.name.replaceAll(
                                    " ",
                                    "-"
                                  )}`}
                                >
                                  {spell.range}
                                </Link>
                              </td>
                              <td className="hidden md:table-cell">
                                <Link
                                  href={`/spells/${spell.name.replaceAll(
                                    " ",
                                    "-"
                                  )}`}
                                >
                                  {spell.duration}
                                </Link>
                              </td>
                              <td className="hidden lg:table-cell">
                                <Link
                                  href={`/spells/${spell.name.replaceAll(
                                    " ",
                                    "-"
                                  )}`}
                                >
                                  {spell.castingTime}
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className=" lg:hidden">
            <div
              role="tablist"
              className="tabs tabs-boxed flex-wrap flex gap-2 justify-center my-4"
            >
              {numberArray(0, 9).map((num, index) => (
                <Fragment key={`${num}-${index}`}>
                  <button
                    role="tab"
                    className={`tab ${num == activeTab && "tab-active"}`}
                    onClick={() => setActiveTab(num)}
                  >
                    {num === 0 ? "Cantrips" : `${numPlace(num)}`}
                  </button>
                </Fragment>
              ))}
            </div>

            {numberArray(0, 9).map((num, index) => (
              <Fragment key={`${num}-${index}`}>
                <div
                  role="tabpanel"
                  className={`bg-base-100 rounded-box ${
                    activeTab == num ? "block" : "hidden"
                  }`}
                >
                  <table className="table w-full table-zebra overflow-hidden table-md">
                    <thead>
                      <tr className="bg-black/30">
                        <th className="w-[20%]">Name</th>
                        <th className="w-[20%]">Range</th>
                        <th className="w-[20%] hidden md:table-cell">
                          Duration
                        </th>
                        <th className="w-[20%] hidden lg:table-cell">
                          Casting Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {spellList.Spells.filter(
                        (spell) => spell.level == activeTab
                      ).map((spell, index) => (
                        <tr
                          key={`${spell.name}-${index}`}
                          onClick={() => {
                            handleLoading();
                            router.push(
                              `/spells/${spell.name.replaceAll(" ", "-")}`
                            );
                          }}
                          className={`hover ${
                            loading ? "cursor-wait" : "cursor-pointer"
                          }`}
                        >
                          <td>
                            <span className="badge badge-accent font-bold">
                              {spell.name}
                            </span>
                          </td>
                          <td>{spell.range}</td>
                          <td className="hidden md:table-cell">
                            {spell.duration}
                          </td>
                          <td className="hidden lg:table-cell">
                            {spell.castingTime}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Fragment>
            ))}
          </div>
          <CommentSection
            id={spellList.id}
            model={AssociatedModel.SPELL_LIST}
          />
        </>
      )}
    </main>
  );
};

export default SpellListPage;
