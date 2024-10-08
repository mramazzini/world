import { getClasses } from "@/lib/actions/db/class/read.actions";
import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { getSpells } from "@/lib/actions/db/spell/read.actions";
import { MetadataRoute } from "next";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";
import { QUERY_LIMIT } from "@/lib/globalVars";
import { getItems } from "@/lib/actions/db/item/read.actions";
import { getSpellLists } from "@/lib/actions/db/spellList/read.actions";
import { getSpecies } from "@/lib/actions/db/species/get.actions";
import { getSubSpecies } from "@/lib/actions/db/subSpecies/read.actions";
import { getFeats } from "@/lib/actions/db/feat/read.actions";
import { getBlogposts } from "@/lib/actions/db/blogpost/read.actions";

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

  const species = await getSpecies();
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/species`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const r of species) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/species/${r.name.replaceAll(" ", "-")}`,
      lastModified: r.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  const variants = await getSubSpecies();
  const subspeciesPagesCount = Math.ceil(variants.length / QUERY_LIMIT);
  for (let i = 1; i < subspeciesPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subspecies?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/subspecies`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const v of variants) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/subspecies/${v.name.replaceAll(
        " ",
        "-"
      )}`,
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

  const spellLists = await getSpellLists();
  const spellListPagesCount = Math.ceil(spellLists.length / QUERY_LIMIT);
  for (let i = 1; i < spellListPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/spell-list?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/spell-list`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const s of spellLists) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/spell-list/${s.name.replaceAll(
        " ",
        "-"
      )}`,
      lastModified: s.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  const feats = await getFeats();
  const featPagesCount = Math.ceil(feats.length / QUERY_LIMIT);
  for (let i = 1; i < featPagesCount; i++) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/feat?page=${i}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/feat`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const f of feats) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/feat/${f.name.replaceAll(" ", "-")}`,
      lastModified: f.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
    });
  }

  const blogPosts = await getBlogposts();
  for (const b of blogPosts) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/blog/${b.route}`,
      lastModified: b.updatedAt,
      changeFrequency: "never",
      priority: 0.8,
    });
  }

  return siteMap;
}
