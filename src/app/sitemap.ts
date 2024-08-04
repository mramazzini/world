import {
  getClasses,
  getSubclass,
  getSubclassFromClassName,
} from "@/lib/actions/db/read.actions";
import { ClassInfo } from "@/lib/types";
import { Class } from "@prisma/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMap: MetadataRoute.Sitemap = [];
  const routes = [
    "/", // the root
    "/class", // select class
    "/class/[className]", // class page
    "/class/[className]/subclass", // select subclass
    "/class/[className]/subclass/[subclassName]", // subclass page
    "/class/[className]/pdf", // pdf page for class
    "/class/create", // create class
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
      url: `${process.env.DOMAIN_NAME}/class/${c.name}/create`,
      lastModified: c.updatedAt,
      changeFrequency: "yearly",
      priority: 0.7,
    });
    const subClasses = await getSubclassFromClassName(c.name);
    if (!subClasses) {
      continue;
    }
    for (const sc of subClasses) {
      siteMap.push({
        url: `${process.env.DOMAIN_NAME}/class/${
          c.name
        }/subclass/${sc.name.replaceAll(" ", "-")}`,
        lastModified: sc.updatedAt,
        changeFrequency: "yearly",
        priority: 0.8,
      });
    }
  }

  return siteMap;
}
