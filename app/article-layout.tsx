import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { siteConfig } from "./site-config";

type TocItem = { href: string; label: string };

type ArticleLayoutProps = {
  kicker: string;
  title: string;
  description: string;
  readingTime: string;
  toc: TocItem[];
  children: ReactNode;
  showOperator?: boolean;
};

export function ArticleLayout({
  kicker,
  title,
  description,
  readingTime,
  toc,
  children,
  showOperator = true,
}: ArticleLayoutProps) {
  return (
    <main id="contenido">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <div className="breadcrumbs"><Link href="/">Inicio</Link><span>/</span><span>{title}</span></div>
          <span className="section-kicker">{kicker}</span>
          <h1>{title}</h1>
          <p className="article-dek">{description}</p>
          <div className="article-meta"><span>Actualizado: {siteConfig.updatedAt}</span><span>·</span><span>{readingTime}</span><span>·</span><span>Contenido editorial independiente</span></div>
        </div>
      </header>
      <div className="article-page">
        <div className="container article-layout">
          <article className="article-content">{children}</article>
          <aside className="article-sidebar" aria-label="Información complementaria">
            <nav className="toc" aria-label="Contenido de la guía">
              <strong>EN ESTA GUÍA</strong>
              {toc.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </nav>
            {showOperator ? (
              <div className="sidebar-card">
                <span>ATENCIÓN DIRECTA</span>
                <h2>¿Tenés una consulta?</h2>
                <p>Escribinos por WhatsApp para recibir orientación antes de continuar.</p>
                <WhatsAppLink className="button button-primary">Abrir WhatsApp <MessageCircle size={16} /></WhatsAppLink>
              </div>
            ) : (
              <div className="sidebar-card">
                <ShieldCheck size={25} />
                <h2>Tu bienestar primero</h2>
                <p>Si el juego dejó de ser divertido, frená, bloqueá el acceso y pedí ayuda.</p>
                <Link className="button button-primary" href="/juego-responsable">Ver recursos <ArrowRight size={16} /></Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

export function ArticleSchema({
  headline,
  description,
  path,
}: {
  headline: string;
  description: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "es-AR",
    datePublished: "2026-08-29",
    dateModified: "2026-08-29",
    mainEntityOfPage: `${siteConfig.url}${path}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
