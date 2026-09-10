import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Clock3, ExternalLink, MessageCircle, SearchCheck, ShieldCheck, Smartphone } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";
import { WhatsAppLink } from "../whatsapp-link";

const title = "Casino online por WhatsApp en Argentina: guía y atención";
const description = "Cómo consultar por WhatsApp sobre casino online en Argentina, qué verificar antes de registrarte y cómo reconocer una plataforma segura.";
const path = "/casino-online-whatsapp-argentina";

export const metadata: Metadata = {
  title: "Casino online por WhatsApp en Argentina",
  description,
  alternates: { canonical: path },
  keywords: [
    "casino online whatsapp argentina",
    "casino virtual whatsapp",
    "casino por whatsapp",
    "casino online argentina whatsapp",
  ],
  openGraph: { title, description, url: path, type: "article" },
};

const faqs = [
  {
    question: "¿Puedo hacer consultas de casino online por WhatsApp?",
    answer: "Sí. Podés usar nuestro canal de WhatsApp para resolver dudas generales sobre acceso, promociones y funcionamiento antes de continuar.",
  },
  {
    question: "¿Tener WhatsApp significa que un casino es legal?",
    answer: "No. Un número o enlace de WhatsApp no reemplaza la licencia, el dominio oficial ni las condiciones publicadas por la plataforma.",
  },
  {
    question: "¿Qué debo verificar antes de registrarme?",
    answer: "Comprobá la regulación aplicable en tu provincia, el dominio final, la identidad del operador y sus términos. En Argentina la autorización depende de cada jurisdicción.",
  },
  {
    question: "¿La atención está destinada a menores de edad?",
    answer: "No. El contenido y el canal de consultas están dirigidos exclusivamente a personas mayores de 18 años.",
  },
];

export default function CasinoWhatsAppPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <ArticleLayout
      kicker="ATENCIÓN DIRECTA"
      title={title}
      description={description}
      readingTime="6 minutos de lectura"
      toc={[
        { href: "#respuesta", label: "Respuesta rápida" },
        { href: "#consultas", label: "Qué podés consultar" },
        { href: "#seguridad", label: "Controles de seguridad" },
        { href: "#como-funciona", label: "Cómo funciona" },
        { href: "#preguntas", label: "Preguntas frecuentes" },
      ]}
    >
      <p id="respuesta"><strong>Respuesta rápida:</strong> Casino Virtual Argentina ofrece un canal directo de atención por WhatsApp para personas mayores de 18 años. Podés utilizarlo para hacer una consulta antes de registrarte o continuar en una plataforma.</p>

      <div className="article-callout"><MessageCircle size={26} /><p>WhatsApp es un canal de comunicación. No demuestra que una plataforma tenga licencia ni reemplaza la verificación del dominio y la regulación correspondiente a tu provincia.</p></div>

      <h2 id="consultas">Qué podés consultar por WhatsApp</h2>
      <div className="legal-card-grid">
        <article><Smartphone size={25} /><h3>Acceso desde el celular</h3><p>Consultas generales sobre el acceso móvil y el funcionamiento de la plataforma.</p></article>
        <article><BadgeCheck size={25} /><h3>Promociones disponibles</h3><p>Información sobre condiciones, vencimientos y requisitos que conviene leer antes de aceptar un bono.</p></article>
        <article><SearchCheck size={25} /><h3>Dominio y disponibilidad</h3><p>Orientación para revisar la dirección final y confirmar si corresponde a tu ubicación.</p></article>
        <article><Clock3 size={25} /><h3>Tiempos de respuesta</h3><p>Podés dejar tu consulta en cualquier momento. La respuesta depende de la disponibilidad del canal.</p></article>
      </div>

      <WhatsAppLink className="button button-primary">Consultar por WhatsApp <ExternalLink size={17} /></WhatsAppLink>

      <h2 id="seguridad">Qué verificar antes de continuar</h2>
      <p>En Argentina el juego online se regula por provincia y por la Ciudad Autónoma de Buenos Aires. Una plataforma habilitada en una jurisdicción puede no estar autorizada en otra.</p>
      <div className="check-table">
        <div><strong>Mayoría de edad</strong><span>El acceso debe estar restringido a personas mayores de 18 años.</span></div>
        <div><strong>Dominio</strong><span>Revisá la dirección completa y evitá imitaciones o enlaces que cambian constantemente.</span></div>
        <div><strong>Jurisdicción</strong><span>Confirmá que la autorización corresponda a la provincia donde te encontrás.</span></div>
        <div><strong>Condiciones</strong><span>Leé límites, requisitos de promociones y políticas antes de tomar una decisión.</span></div>
        <div><strong>Datos personales</strong><span>No compartas contraseñas, códigos de verificación ni información sensible por mensajes no solicitados.</span></div>
      </div>
      <p>Para profundizar estos controles, consultá nuestra guía de <Link href="/casinos-online-legales-argentina">casinos online legales en Argentina</Link>.</p>

      <h2 id="como-funciona">Cómo funciona nuestro canal</h2>
      <ol>
        <li>Abrí cualquiera de los botones de WhatsApp del sitio.</li>
        <li>Escribí tu consulta de forma clara y sin enviar datos sensibles.</li>
        <li>Revisá la información y verificá por tu cuenta el dominio y las condiciones aplicables.</li>
        <li>Si decidís jugar, establecé previamente un límite de tiempo y dinero.</li>
      </ol>
      <div className="article-callout"><ShieldCheck size={26} /><p>El juego implica riesgo de pérdida. La atención por WhatsApp no garantiza resultados ni reemplaza las herramientas de <Link href="/juego-responsable">juego responsable</Link>.</p></div>

      <h2 id="preguntas">Preguntas frecuentes</h2>
      {faqs.map(({ question, answer }) => (
        <section key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </section>
      ))}

      <WhatsAppLink className="button button-primary">Abrir WhatsApp <MessageCircle size={17} /></WhatsAppLink>
      <ArticleSchema headline={title} description={description} path={path} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </ArticleLayout>
  );
}
