import Link from "next/link";
import { Camera, ChevronDown, Menu, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { siteConfig } from "./site-config";

export function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark" aria-hidden="true">CV</span>
      <span className="brand-name">Casino Virtual<small>ARGENTINA</small></span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Casino Virtual Argentina, inicio"><Brand /></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/casino-online-24-horas-whatsapp">Casino 24 horas</Link>
          <Link href="/casino-online-whatsapp-argentina">Casino por WhatsApp</Link>
          <Link href="/casino-fichas-whatsapp">Fichas por WhatsApp</Link>
          <Link href="/bonos-casino-online-argentina">Bonos</Link>
          <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><Camera size={14} /> Instagram</a>
        </nav>
        <WhatsAppLink className="button button-small desktop-cta">Abrir WhatsApp <MessageCircle size={14} /></WhatsAppLink>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><Menu size={21} /><ChevronDown size={15} /></summary>
          <nav aria-label="Navegación móvil">
            <Link href="/casino-online-24-horas-whatsapp">Casino online 24 horas</Link>
            <Link href="/casino-online-whatsapp-argentina">Casino online por WhatsApp</Link>
            <Link href="/casino-fichas-whatsapp">Fichas por WhatsApp</Link>
            <Link href="/bonos-casino-online-argentina">Bonos de casino</Link>
            <Link href="/casino-online-desde-el-celular">Casino desde el celular</Link>
            <Link href="/casinos-online-legales-argentina">Seguridad y legalidad</Link>
            <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Seguir {siteConfig.instagram.handle}</a>
            <WhatsAppLink>Abrir WhatsApp</WhatsAppLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
