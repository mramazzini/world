"use client";

import SpellDisplay from "../Spells/SpellDisplay";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getSpell } from "@/lib/actions/db/spell/read.actions";
import { SpellInfo } from "@/lib/types";
import Loading from "../UI/Loading";
const SpellPage = () => {
  const spellName = usePathname().split("/")[2].replaceAll("-", " ");
  const [data, setData] = useState<SpellInfo | null>(null);
  useEffect(() => {
    getSpell(spellName).then((res) => {
      setData(res);
    });
  }, []);
  if (!spellName) return <span className="p-4">Spell does not exist!</span>;
  return (
    <main className="p-4 md:p-8">
      {!data && <Loading />}
      {data && <SpellDisplay spell={data} />}
    </main>
  );
};

export default SpellPage;
