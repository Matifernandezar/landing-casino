import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.casinovirtuargentina.com/sitemap.xml",
    host: "https://www.casinovirtuargentina.com",
  };
}
