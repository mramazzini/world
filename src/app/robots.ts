import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // All search engines bots.
        allow: ["/"], // Allow all pages to be crawled.
        disallow: ["/test"], // Disallow the /test page. (just for testing purposes so it doesn't get indexed)
      },
    ],
    sitemap: "https://world-ashen.vercel.app/sitemap.xml",
  };
}
