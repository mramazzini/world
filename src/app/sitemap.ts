import { getClasses } from "@/lib/actions/db/class/read.actions";
import { getSubclassFromClassName } from "@/lib/actions/db/subclass/read.actions";
import { getSpells } from "@/lib/actions/db/spell/read.actions";
import { MetadataRoute } from "next";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap: MetadataRoute.Sitemap = [];
  const routes = [
    "/", // the root
    "/class", // select class
    "/class/[className]", // class page
    "/class/[className]/subclass", // select subclass
    "/class/[className]/subclass", // subclass select
    "/class/[className]/pdf", // pdf page for class
    "/class/create", // create class
    "/subclass/[subclass]", // subclass page
    "/spells", // spell select
    "/spells/[spell]", // spell page
    "/homebrew", // homebrew
    "/homebrew/class/create", // create homebrew class
    "/homebrew/subclass",
    "/homebrew/spells",
    "/item-generator", // item generator
  ];

  if (process.env.DOMAIN_NAME === undefined) {
    throw new Error("DOMAIN_NAME is not defined in env");
  }

  const classes = await getClasses();
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
      url: `${process.env.DOMAIN_NAME}/class/${c.name}/pdf`,
      lastModified: c.updatedAt,
      changeFrequency: "yearly",
      priority: 0.3,
    });
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/class/${c.name}/subclass`,
      lastModified: c.updatedAt,
      changeFrequency: "yearly",
      priority: 0.9,
    });
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/homebrew/class/create`,
      lastModified: c.updatedAt,
      changeFrequency: "yearly",
      priority: 0.7,
    });
    const subClasses = await getSubclassFromClassName(c.name);
    if (!subClasses) {
      continue;
    }
    for (const sc of subClasses) {
      if (sc.userId) {
        continue;
      }
      siteMap.push({
        url: `${process.env.DOMAIN_NAME}/subclass/${sc.name.replaceAll(
          " ",
          "-"
        )}`,
        lastModified: sc.updatedAt,
        changeFrequency: "yearly",
        priority: 0.8,
      });
    }
  }
  const spells = await getSpells();
  siteMap.push({
    url: `${process.env.DOMAIN_NAME}/spells`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  });
  for (const s of spells) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}/spells/${s.name.replaceAll(" ", "-")}`,
      lastModified: s.updatedAt,
      changeFrequency: "yearly",
      priority: 0.8,
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

  return siteMap;
}
