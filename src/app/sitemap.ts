import { getClassMeta } from "@/lib/actions/db/read.actions";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMap: MetadataRoute.Sitemap = [];
  const routes = [
    "/", // the root
    "/class", // select class
    // "/class/[className]",//class page
    "/class/[className]/subclass", // select subclass
    "/class/[className]/subclass/[subclassName]", // subclass page
    "/class/[className]/pdf", // pdf page for class
    "/class/create", // create class
    "/item-generator", // item generator
  ];

  if (process.env.DOMAIN_NAME === undefined) {
    throw new Error("DOMAIN_NAME is not defined in env");
  }

  for (const route of routes) {
    siteMap.push({
      url: `${process.env.DOMAIN_NAME}${route}`,
    });
  }

  return siteMap;
}
