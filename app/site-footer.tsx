import Link from "next/link";
import { Camera } from "lucide-react";
import { Brand } from "./site-header";
import { siteConfig } from "./site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-summary">Información sobre casino online en Argentina y un canal de consultas por WhatsApp disponible las 24 horas. Contenido exclusivo para mayores de 18 años.</p>
          <a className="instagram-link" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><Camera size={16} /> {siteConfig.instagram.handle}</a>
        </div>
        <div>
          <strong>Casino por WhatsApp</strong>
          <Link href="/casino-online-24-horas-whatsapp">Casino online 24 horas</Link>
          <Link href="/casino-online-whatsapp-argentina">Casino por WhatsApp Argentina</Link>
          <Link href="/casino-fichas-whatsapp">Fichas por WhatsApp</Link>
          <Link href="/casino-online-desde-el-celular">Casino desde el celular</Link>
        </div>
        <div>
          <strong>Información</strong>
          <Link href="/bonos-casino-online-argentina">Bonos y promociones</Link>
          <Link href="/casinos-online-legales-argentina">Seguridad y legalidad</Link>
          <Link href="/juego-responsable">Juego responsable</Link>
          <Link href="/politica-de-privacidad">Privacidad</Link>
          <Link href="/terminos-y-condiciones">Términos</Link>
        </div>
      </div>
      <div className="container affiliate-disclosure"><strong>Canal de contacto:</strong> los botones principales abren WhatsApp. Revisá condiciones, límites y la regulación aplicable antes de jugar.</div>
      <div className="container footer-bottom"><span>© 2026 Casino Virtual Argentina</span><span>Solo mayores de 18 años · El juego implica riesgo de pérdida</span></div>
    </footer>
  );
}
