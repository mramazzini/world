import { getClasses } from "@/lib/actions/db/class/read.actions";
import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { getSpells } from "@/lib/actions/db/spell/read.actions";
import { MetadataRoute } from "next";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { getRaces } from "@/lib/actions/db/race/get.actions";
import { getSubRaces } from "@/lib/actions/db/subrace/read.actions";
import { getItems } from "@/lib/actions/db/item/read.actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap: MetadataRoute.Sitemap = [];

  if (process.env.DOMAIN_NAME === undefined) {
    throw new Error("DOMAIN_NAME is not defined in env");
  }

  const classes = await getClasses(false);
  siteMap.push({
    url: process.env.DOMAIN_NAME,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  });
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/class`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const c of classes) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/class/${c.name}`,
      lastModified: c.updatedAt,

      changeFrequency: "yearly",
      priority: 0.8,
    });

    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/class/${c.name}/subclass`,
      lastModified: c.updatedAt,
      changeFrequency: "yearly",
      priority: 0.9,
    });
    // siteMap.push({
    //   url: `${process.env.DOMAIN_NAME}/homebrew/class/create`,
    //   lastModified: c.updatedAt,
    //   changeFrequency: "yearly",
    //   priority: 0.7,
    // });
  }
  const subclasses = await getSubclasses({ homebrew: false });
  for (const s of subclasses) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subclass/${s.name.replaceAll(" ", "-")}`,
      lastModified: s.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }
  const subclassPagesCount = Math.ceil(subclasses.length / QUERY_LIMIT);
  for (let i = 1; i < subclassPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subclass?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/subclass`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });

  const spells = await getSpells();
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/spells`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (let i = 0; i < spells.length; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/spells/${spells[i].name.replaceAll(
        " ",
        "-"
      )}`,
      lastModified: spells[i].updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }
  const spellPagesCount = Math.ceil(spells.length / QUERY_LIMIT);
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/spells?page=0`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  });
  for (let i = 1; i < spellPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/spells?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  const backgrounds = await getBackgrounds();
  // siteMap.push({
  //   url: `${process.env.DOMAIN_NAME}/homebrew/backgrounds`,
  //   lastModified: new Date(),
  //   changeFrequency: "yearly",
  //   priority: 0.7,
  // });
  for (const b of backgrounds) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/background/${b.name.replaceAll(
        " ",
        "-"
      )}`,
      lastModified: b.updatedAt,
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/background`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  const backgroundPagesCount = Math.ceil(backgrounds.length / QUERY_LIMIT);
  for (let i = 1; i < backgroundPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/background?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  const races = await getRaces();
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/race`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const r of races) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/race/${r.name.replaceAll(" ", "-")}`,
      lastModified: r.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  const variants = await getSubRaces();
  const subracePagesCount = Math.ceil(variants.length / QUERY_LIMIT);
  for (let i = 1; i < subracePagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subrace?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/subrace`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const v of variants) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subrace/${v.name.replaceAll(" ", "-")}`,
      lastModified: v.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  const items = await getItems();
  const itemPagesCount = Math.ceil(items.length / QUERY_LIMIT);
  for (let i = 1; i < itemPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/item?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/item`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const t of items) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/item/${t.name.replaceAll(" ", "-")}`,
      lastModified: t.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  return siteMap;
}
