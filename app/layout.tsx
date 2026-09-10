import type { Metadata } from "next";
import { AgeGate } from "./age-gate";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { siteConfig } from "./site-config";
import { WhatsAppFloat } from "./whatsapp-link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Casino Virtual Argentina | Atención por WhatsApp",
    template: "%s | Casino Virtual Argentina",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  keywords: [
    "casino virtual argentina",
    "casino online argentina",
    "casinos online legales argentina",
    "casino online seguro",
    "casino online desde el celular",
    "casino online whatsapp argentina",
    "casino virtual whatsapp",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Casino Virtual Argentina | Atención por WhatsApp",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "Casino Virtual Argentina",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "es-AR",
  description: siteConfig.description,
  publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <AgeGate />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
