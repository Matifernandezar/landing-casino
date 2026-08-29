import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BookOpenCheck, ExternalLink, FileCheck2, Scale, SearchCheck, ShieldCheck, Smartphone } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Cómo evaluamos casinos online";
const description = "Metodología editorial de Casino Virtual Argentina: regulación, seguridad, experiencia móvil, transparencia, afiliación y actualización de contenidos.";
const path = "/metodologia";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function MethodologyPage() {
  return (
    <ArticleLayout
      kicker="TRANSPARENCIA EDITORIAL"
      title={title}
      description={description}
      readingTime="6 minutos de lectura"
      toc={[
        { href: "#criterios", label: "Criterios" },
        { href: "#proceso", label: "Proceso de revisión" },
        { href: "#afiliados", label: "Relación de afiliados" },
        { href: "#correcciones", label: "Actualizaciones" },
      ]}
    >
      <p>Casino Virtual Argentina es una guía independiente. Nuestro objetivo es ayudar a que una persona identifique plataformas autorizadas, entienda las condiciones antes de registrarse y evite transferencias a intermediarios no regulados.</p>
      <p>No operamos juegos, no creamos cuentas, no recibimos depósitos y no procesamos retiros. Cuando una persona decide visitar un casino, abandona este sitio y opera directamente con la plataforma seleccionada.</p>

      <h2 id="criterios">Criterios principales de evaluación</h2>
      <div className="legal-card-grid">
        <article><ShieldCheck size={25} /><h3>Autorización local</h3><p>Revisamos jurisdicciones declaradas, dominio .bet.ar y datos del operador.</p></article>
        <article><SearchCheck size={25} /><h3>Identidad comprobable</h3><p>Buscamos razón social, términos, privacidad y canales de soporte visibles.</p></article>
        <article><Smartphone size={25} /><h3>Experiencia del jugador</h3><p>Consideramos claridad del registro, navegación móvil y herramientas de cuenta.</p></article>
        <article><BookOpenCheck size={25} /><h3>Condiciones</h3><p>Priorizamos plataformas que explican bonos, pagos y limitaciones antes de jugar.</p></article>
        <article><Scale size={25} /><h3>Juego responsable</h3><p>Verificamos advertencias +18, límites, pausas y mecanismos de autoexclusión.</p></article>
        <article><FileCheck2 size={25} /><h3>Actualización</h3><p>Fechamos las revisiones y corregimos información cuando cambian condiciones relevantes.</p></article>
      </div>

      <h2 id="proceso">Cómo realizamos una revisión</h2>
      <ol>
        <li>Comprobamos la existencia de un dominio argentino autorizado.</li>
        <li>Identificamos las provincias o jurisdicciones declaradas por el operador.</li>
        <li>Revisamos páginas de términos, privacidad y juego responsable.</li>
        <li>Analizamos el recorrido público desde un teléfono sin realizar apuestas.</li>
        <li>Comparamos la claridad de promociones y restricciones.</li>
        <li>Redactamos contenido original orientado a resolver preguntas concretas.</li>
        <li>Indicamos la fecha de la última revisión editorial.</li>
      </ol>
      <div className="article-callout"><BadgeCheck size={26} /><p>No publicamos puntuaciones numéricas inventadas, testimonios falsos ni promesas sobre velocidad de retiros que no podamos sostener con información verificable.</p></div>

      <h2 id="afiliados">Cómo funcionan nuestros enlaces de afiliado</h2>
      <p>Algunos enlaces que conducen hacia un operador pueden incluir un identificador de afiliado. Si un usuario se registra o cumple determinadas condiciones, Casino Virtual Argentina podría recibir una comisión. Esta comisión no aumenta el costo para el usuario.</p>
      <p>La relación comercial no convierte al operador en propietario de este sitio ni le permite controlar nuestras explicaciones. Marcamos estos enlaces como patrocinados para que los buscadores y las personas puedan comprender su naturaleza.</p>
      <p>En esta etapa destacamos a Betsson Argentina por sus señales regulatorias y su presencia declarada en CABA, Provincia de Buenos Aires y Córdoba. La recomendación puede cambiar si cambian las licencias, las condiciones o la calidad de la experiencia.</p>

      <h2 id="correcciones">Actualizaciones y correcciones</h2>
      <p>La regulación, los dominios, los bonos y los medios de pago pueden cambiar. Por eso colocamos una fecha visible en las guías y priorizamos enlaces hacia fuentes oficiales. Si detectás información desactualizada, podés avisarnos mediante nuestro canal de <a href="https://www.instagram.com/casino_virtual.online/" target="_blank" rel="noopener noreferrer">Instagram {`@casino_virtual.online`} <ExternalLink size={13} /></a>.</p>

      <h2>Fuentes que priorizamos</h2>
      <ul>
        <li>Organismos provinciales de loterías y juego.</li>
        <li>Asociación de Loterías Estatales Argentinas (ALEA).</li>
        <li>Dominios oficiales .bet.ar y documentación del operador.</li>
        <li>Fuentes gubernamentales para salud y juego responsable.</li>
        <li>Documentación oficial de Google para prácticas SEO y enlaces patrocinados.</li>
      </ul>
      <p>Para empezar, consultá nuestra guía de <Link href="/casinos-online-legales-argentina">casinos online legales en Argentina</Link>.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
