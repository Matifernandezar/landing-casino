import type { MetadataRoute } from "next";

const siteUrl = "https://www.casinovirtuargentina.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-29T00:00:00-03:00");
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/casinos-online-legales-argentina`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/bonos-casino-online-argentina`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: `${siteUrl}/casino-online-desde-el-celular`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/juego-responsable`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteUrl}/metodologia`, lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${siteUrl}/politica-de-privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terminos-y-condiciones`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
