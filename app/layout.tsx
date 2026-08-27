import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://casinovirtualargentina.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Casino Virtual Argentina | Información y promociones",
  description: "Conocé Casino Virtual Argentina desde tu celular, consultá promociones vigentes y revisá condiciones con información clara y juego responsable.",
  alternates: { canonical: "/" },
  keywords: ["casino virtual argentina", "casino online argentina", "casino virtual desde el celular", "promociones casino online"],
  openGraph: {
    type: "website", locale: "es_AR", url: siteUrl, siteName: "Casino Virtual Argentina",
    title: "Casino Virtual Argentina | Información y promociones",
    description: "Información clara, promociones vigentes y acceso desde tu celular. Exclusivo para mayores de 18 años.",
  },
  twitter: {
    card: "summary", title: "Casino Virtual Argentina",
    description: "Información y promociones vigentes para mayores de 18 años.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const schema = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Casino Virtual Argentina",
  url: siteUrl, inLanguage: "es-AR",
  description: "Sitio informativo sobre entretenimiento virtual, promociones vigentes y juego responsable para mayores de 18 años.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body>
    </html>
  );
}
