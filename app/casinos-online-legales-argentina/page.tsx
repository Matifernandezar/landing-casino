import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ExternalLink, Landmark, MapPin, SearchCheck, ShieldAlert, ShieldCheck } from "lucide-react";
import { AffiliateLink } from "../affiliate-link";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Casinos online legales en Argentina: cómo reconocerlos";
const description = "Guía actualizada para comprobar licencias provinciales, dominios .bet.ar, seguridad y disponibilidad antes de registrarte en un casino virtual argentino.";
const path = "/casinos-online-legales-argentina";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function LegalCasinosPage() {
  return (
    <ArticleLayout
      kicker="LEGALIDAD Y SEGURIDAD"
      title={title}
      description={description}
      readingTime="8 minutos de lectura"
      toc={[
        { href: "#respuesta", label: "Respuesta rápida" },
        { href: "#regulacion", label: "Cómo se regula" },
        { href: "#bet-ar", label: "Qué significa .bet.ar" },
        { href: "#verificar", label: "Lista de verificación" },
        { href: "#recomendado", label: "Operador destacado" },
        { href: "#alertas", label: "Señales de alerta" },
      ]}
    >
      <p id="respuesta"><strong>Respuesta rápida:</strong> un casino online es legal en Argentina cuando cuenta con autorización de la autoridad competente de la jurisdicción donde está ubicado el jugador. La señal más sencilla para reconocer una plataforma autorizada es que opere mediante un dominio terminado en <strong>.bet.ar</strong> y declare claramente su licencia local.</p>

      <div className="article-callout"><ShieldCheck size={26} /><p><strong>Dato clave:</strong> en Argentina el juego online no tiene una única licencia nacional. Una plataforma autorizada en CABA no queda automáticamente habilitada en Salta, Córdoba o cualquier otra provincia.</p></div>

      <h2 id="regulacion">La regulación es provincial</h2>
      <p>Argentina tiene una organización federal. Cada provincia y la Ciudad Autónoma de Buenos Aires poseen facultades para regular el juego dentro de su territorio. Por eso, el mismo operador puede utilizar direcciones diferentes, solicitar geolocalización y ofrecer condiciones distintas según la ubicación.</p>
      <p>Antes de crear una cuenta, buscá el nombre de la autoridad reguladora, la sociedad operadora y la jurisdicción indicada al pie del sitio. La ubicación no es un detalle administrativo: determina si la plataforma puede aceptar legalmente tu registro.</p>

      <div className="legal-card-grid">
        <article><MapPin size={25} /><h3>Ubicación real</h3><p>La plataforma puede comprobar dónde te encontrás y limitar el acceso cuando estás fuera de una jurisdicción habilitada.</p></article>
        <article><Landmark size={25} /><h3>Autoridad local</h3><p>La licencia debe provenir del organismo competente de la provincia o de CABA, no solamente de una entidad extranjera.</p></article>
        <article><BadgeCheck size={25} /><h3>Identidad verificada</h3><p>Los operadores regulados solicitan datos personales y controles de mayoría de edad antes de habilitar la cuenta.</p></article>
        <article><SearchCheck size={25} /><h3>Información pública</h3><p>Los términos, la privacidad, las reglas y las herramientas de juego responsable deben poder consultarse fácilmente.</p></article>
      </div>

      <h2 id="bet-ar">¿Qué significa que el dominio termine en .bet.ar?</h2>
      <p>La zona <strong>.bet.ar</strong> fue creada para identificar plataformas validadas y autorizadas por organismos reguladores argentinos. ALEA explica que obtener uno de estos dominios exige ser un operador de juego online autorizado. Es una señal fuerte y comprobable, aunque también tenés que revisar que corresponda a tu provincia.</p>
      <p>Podés consultar el <a href="https://www.alea.org.ar/juegosonlineautorizados" target="_blank" rel="noopener noreferrer">listado de plataformas autorizadas publicado por ALEA</a>. No confíes solamente en un logo, una publicidad o la palabra “legal”: comprobá la dirección completa del navegador.</p>

      <h2 id="verificar">Lista para verificar un casino virtual</h2>
      <div className="check-table">
        <div><strong>Dominio</strong><span>Termina en .bet.ar y no contiene errores, agregados extraños ni redirecciones sospechosas.</span></div>
        <div><strong>Jurisdicción</strong><span>La provincia o CABA aparece claramente indicada y coincide con tu ubicación.</span></div>
        <div><strong>Operador</strong><span>Informa razón social, términos, política de privacidad y canales oficiales de soporte.</span></div>
        <div><strong>Registro</strong><span>Solicita mayoría de edad, identidad y controles de geolocalización.</span></div>
        <div><strong>Dinero</strong><span>Los depósitos y retiros ocurren dentro de la cuenta del jugador, nunca mediante un cajero particular.</span></div>
        <div><strong>Responsabilidad</strong><span>Ofrece límites, autoexclusión y advertencias visibles sobre el riesgo de pérdida.</span></div>
      </div>

      <h2 id="recomendado">Nuestra opción destacada actual</h2>
      <p>Destacamos a <strong>Betsson Argentina</strong> porque informa presencia autorizada en Ciudad de Buenos Aires, Provincia de Buenos Aires y Córdoba, utiliza dominios .bet.ar y concentra el registro, los pagos y el juego dentro de su plataforma. La recomendación sigue estando sujeta a que el usuario se encuentre en una jurisdicción habilitada.</p>
      <p>Esta selección no significa que sea adecuado para todas las personas ni garantiza resultados. El juego siempre implica riesgo. Antes de registrarte, revisá las condiciones vigentes directamente en el operador.</p>
      <AffiliateLink className="button button-primary">Visitar el sitio oficial <ExternalLink size={17} /></AffiliateLink>

      <h2 id="alertas">Señales de alerta de una plataforma no autorizada</h2>
      <ul>
        <li>Te pide transferir dinero a una cuenta bancaria o billetera personal.</li>
        <li>Crea usuarios manualmente y entrega una contraseña por mensaje.</li>
        <li>No informa razón social, jurisdicción o autoridad reguladora argentina.</li>
        <li>Utiliza dominios que cambian constantemente o imitan una marca conocida.</li>
        <li>Promete ganancias seguras, retiros garantizados o bonos sin condiciones.</li>
        <li>Permite jugar sin verificar edad o identidad.</li>
      </ul>
      <div className="article-callout"><ShieldAlert size={26} /><p>Un perfil popular de Instagram, Telegram o WhatsApp no convierte una operación en legal. Usá esos canales para informarte, pero registrate y depositá solamente dentro del operador autorizado.</p></div>

      <h2>Qué leer después</h2>
      <p>Si ya verificaste la plataforma, continuá con nuestra <Link href="/bonos-casino-online-argentina">guía para entender bonos de casino</Link> o revisá cómo funciona un <Link href="/casino-online-desde-el-celular">casino online desde el celular</Link>.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
