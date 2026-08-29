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
          <p className="footer-summary">Guía independiente sobre casinos virtuales autorizados en Argentina. No somos un casino y no recibimos depósitos ni procesamos apuestas.</p>
          <a className="instagram-link" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><Camera size={16} /> {siteConfig.instagram.handle}</a>
        </div>
        <div>
          <strong>Guías</strong>
          <Link href="/casinos-online-legales-argentina">Casinos online legales</Link>
          <Link href="/bonos-casino-online-argentina">Bonos de casino</Link>
          <Link href="/casino-online-desde-el-celular">Casino desde el celular</Link>
        </div>
        <div>
          <strong>Transparencia</strong>
          <Link href="/metodologia">Metodología editorial</Link>
          <Link href="/juego-responsable">Juego responsable</Link>
          <Link href="/politica-de-privacidad">Privacidad</Link>
          <Link href="/terminos-y-condiciones">Términos</Link>
        </div>
      </div>
      <div className="container affiliate-disclosure"><strong>Divulgación de afiliados:</strong> algunos enlaces pueden generar una comisión para este sitio, sin costo adicional para vos. Esto no modifica nuestros criterios de evaluación.</div>
      <div className="container footer-bottom"><span>© 2026 Casino Virtual Argentina</span><span>Solo mayores de 18 años · El juego implica riesgo de pérdida</span></div>
    </footer>
  );
}
