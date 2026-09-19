import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, ExternalLink, MessageCircle, ShieldCheck, Smartphone } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";
import { WhatsAppLink } from "../whatsapp-link";

const title = "Casino online 24 horas por WhatsApp en Argentina";
const description = "Casino online 24 horas por WhatsApp en Argentina: consultas desde el celular sobre acceso, promociones, juegos y funcionamiento para mayores de 18 años.";
const path = "/casino-online-24-horas-whatsapp";
const reelUrl = "https://www.instagram.com/reel/DTJR3h3kdaR/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  keywords: [
    "casino online 24 horas whatsapp",
    "casino online whatsapp",
    "casino whatsapp 24 horas",
    "casino online whatsapp argentina",
    "casino virtual whatsapp",
  ],
  openGraph: { title, description, url: path, type: "article" },
};

export default function Casino24HorasWhatsappPage() {
  return (
    <ArticleLayout
      kicker="CASINO ONLINE 24 HORAS"
      title={title}
      description={description}
      readingTime="5 minutos de lectura"
      toc={[
        { href: "#como-funciona", label: "Cómo funciona" },
        { href: "#consultas", label: "Qué podés consultar" },
        { href: "#instagram", label: "Contenido en Instagram" },
        { href: "#seguridad", label: "Antes de continuar" },
      ]}
    >
      <p><strong>Respuesta rápida:</strong> podés dejar una consulta por WhatsApp durante las 24 horas desde tu celular. El canal está orientado a usuarios mayores de 18 años en Argentina.</p>

      <div className="article-callout"><Clock3 size={26} /><p>“24 horas” significa que el canal está disponible para recibir mensajes durante todo el día. El tiempo de respuesta puede variar según la disponibilidad del momento.</p></div>

      <h2 id="como-funciona">Cómo funciona el casino online por WhatsApp 24 horas</h2>
      <ol>
        <li>Abrí el botón de WhatsApp desde esta página.</li>
        <li>Escribí tu consulta sobre acceso, promociones, juegos o funcionamiento.</li>
        <li>Revisá las condiciones aplicables antes de continuar.</li>
        <li>Si decidís jugar, establecé previamente límites de tiempo y dinero.</li>
      </ol>
      <WhatsAppLink className="button button-primary">Consultar por WhatsApp ahora <MessageCircle size={17} /></WhatsAppLink>

      <h2 id="consultas">Qué podés consultar</h2>
      <div className="legal-card-grid">
        <article><Smartphone size={25} /><h3>Acceso desde el celular</h3><p>Orientación general para ingresar y navegar desde un dispositivo móvil.</p></article>
        <article><MessageCircle size={25} /><h3>Atención por WhatsApp</h3><p>Un canal directo para resolver dudas antes de continuar.</p></article>
        <article><Clock3 size={25} /><h3>Disponibilidad 24 horas</h3><p>Podés dejar tu consulta en cualquier momento del día.</p></article>
        <article><ShieldCheck size={25} /><h3>Información responsable</h3><p>Contenido exclusivo para mayores de 18 años, sin promesas de ganancias.</p></article>
      </div>

      <h2 id="instagram">El Reel de Instagram que ya aparece en búsquedas</h2>
      <p>Nuestro contenido de Instagram sobre <strong>casino online por WhatsApp y atención 24 horas en Argentina</strong> ya empezó a recibir tráfico desde búsquedas. La web utiliza la misma intención para que quienes llegan desde Google o Instagram encuentren una ruta clara hacia la información que buscan.</p>
      <p><a href={reelUrl} target="_blank" rel="noopener noreferrer">Ver el Reel en Instagram <ExternalLink size={15} /></a></p>

      <h2 id="seguridad">Antes de continuar</h2>
      <p>WhatsApp es un canal de comunicación. No reemplaza las condiciones de la plataforma ni la regulación aplicable. Antes de jugar, revisá límites, términos y disponibilidad para tu ubicación.</p>
      <p>Para más información podés consultar la guía de <Link href="/casino-online-whatsapp-argentina">casino online por WhatsApp en Argentina</Link> o la página sobre <Link href="/casino-fichas-whatsapp">fichas por WhatsApp</Link>.</p>

      <WhatsAppLink className="button button-primary">Abrir WhatsApp <MessageCircle size={17} /></WhatsAppLink>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
