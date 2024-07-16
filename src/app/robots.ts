import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // All search engines bots.
        allow: ["/"], // Allow all pages to be crawled.
      },
    ],
    sitemap: "https://world-ashen.vercel.app/sitemap.xml",
  };
}
