import type { Metadata } from "next";
import Link from "next/link";
import { CircleDollarSign, MessageCircle, ShieldCheck, Smartphone } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";
import { WhatsAppLink } from "../whatsapp-link";

const title = "Casino fichas por WhatsApp en Argentina";
const description = "Información sobre casino fichas por WhatsApp en Argentina: consultas desde el celular sobre acceso, disponibilidad, promociones y condiciones para mayores de 18 años.";
const path = "/casino-fichas-whatsapp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  keywords: [
    "casino fichas whatsapp",
    "casino whatsapp",
    "casinos whatsapp",
    "casino online whatsapp",
    "casino virtual whatsapp",
  ],
  openGraph: { title, description, url: path, type: "article" },
};

export default function CasinoFichasWhatsappPage() {
  return (
    <ArticleLayout
      kicker="FICHAS Y CONSULTAS"
      title={title}
      description={description}
      readingTime="4 minutos de lectura"
      toc={[
        { href: "#que-significa", label: "Qué significa" },
        { href: "#consultas", label: "Qué consultar" },
        { href: "#antes", label: "Antes de continuar" },
      ]}
    >
      <p><strong>Respuesta rápida:</strong> si buscás “casino fichas WhatsApp”, podés utilizar nuestro canal para consultar sobre acceso, disponibilidad, promociones y condiciones antes de continuar.</p>

      <div className="article-callout"><MessageCircle size={26} /><p>El canal de WhatsApp sirve para consultas. Revisá siempre las condiciones de la plataforma y evitá compartir contraseñas, códigos de verificación u otros datos sensibles.</p></div>

      <h2 id="que-significa">Qué significa buscar fichas de casino por WhatsApp</h2>
      <p>Muchas búsquedas utilizan la palabra “fichas” para referirse al saldo o crédito utilizado dentro de una experiencia de casino online. En esta página concentramos la información relacionada con esa intención de búsqueda y el acceso desde el celular.</p>

      <h2 id="consultas">Qué podés consultar por WhatsApp</h2>
      <div className="legal-card-grid">
        <article><CircleDollarSign size={25} /><h3>Disponibilidad</h3><p>Consultá qué opciones están disponibles y cuáles son sus condiciones vigentes.</p></article>
        <article><Smartphone size={25} /><h3>Acceso móvil</h3><p>Orientación general para continuar desde el teléfono.</p></article>
        <article><MessageCircle size={25} /><h3>Promociones</h3><p>Información sobre requisitos, vigencia y condiciones antes de aceptar un beneficio.</p></article>
        <article><ShieldCheck size={25} /><h3>Uso responsable</h3><p>Contenido exclusivo para mayores de 18 años y sin promesas de resultados.</p></article>
      </div>

      <WhatsAppLink className="button button-primary">Consultar por WhatsApp <MessageCircle size={17} /></WhatsAppLink>

      <h2 id="antes">Antes de continuar</h2>
      <p>El juego implica riesgo de pérdida. Definí previamente cuánto tiempo y dinero podés destinar sin afectar gastos esenciales y revisá las condiciones aplicables.</p>
      <p>También podés consultar nuestra landing de <Link href="/casino-online-24-horas-whatsapp">casino online 24 horas por WhatsApp</Link> o la guía de <Link href="/casino-online-whatsapp-argentina">casino online por WhatsApp en Argentina</Link>.</p>

      <WhatsAppLink className="button button-primary">Abrir WhatsApp ahora <MessageCircle size={17} /></WhatsAppLink>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
