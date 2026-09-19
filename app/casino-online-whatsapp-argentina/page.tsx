import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ExternalLink, MessageCircle, SearchCheck, ShieldCheck, Smartphone } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";
import { WhatsAppLink } from "../whatsapp-link";

const title = "Casino online por WhatsApp en Argentina: consultas y acceso";
const description = "Casino online por WhatsApp en Argentina: cómo consultar desde el celular sobre acceso, promociones y funcionamiento, y qué revisar antes de continuar.";
const path = "/casino-online-whatsapp-argentina";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  keywords: [
    "casino online whatsapp argentina",
    "casino online whatsapp",
    "casino whatsapp argentina",
    "casino por whatsapp",
    "casino virtual whatsapp",
  ],
  openGraph: { title, description, url: path, type: "article" },
};

const faqs = [
  {
    question: "¿Puedo hacer consultas de casino online por WhatsApp?",
    answer: "Sí. Podés usar nuestro canal de WhatsApp para resolver dudas generales sobre acceso, promociones y funcionamiento antes de continuar.",
  },
  {
    question: "¿Puedo acceder desde el celular?",
    answer: "Sí. El sitio está optimizado para móviles y los botones principales abren WhatsApp directamente desde el teléfono.",
  },
  {
    question: "¿WhatsApp demuestra que una plataforma es legal?",
    answer: "No. Un número o enlace de WhatsApp no reemplaza la licencia, el dominio oficial ni las condiciones publicadas por la plataforma.",
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
      kicker="CASINO POR WHATSAPP"
      title={title}
      description={description}
      readingTime="6 minutos de lectura"
      toc={[
        { href: "#respuesta", label: "Respuesta rápida" },
        { href: "#consultas", label: "Qué podés consultar" },
        { href: "#como-funciona", label: "Cómo funciona" },
        { href: "#seguridad", label: "Antes de continuar" },
        { href: "#preguntas", label: "Preguntas frecuentes" },
      ]}
    >
      <p id="respuesta"><strong>Respuesta rápida:</strong> Casino Virtual Argentina ofrece un canal directo de consultas por WhatsApp para personas mayores de 18 años. Podés escribir desde el celular antes de registrarte o continuar en una plataforma.</p>

      <div className="article-callout"><MessageCircle size={26} /><p>WhatsApp es un canal de comunicación. No demuestra que una plataforma tenga licencia ni reemplaza la verificación de sus condiciones.</p></div>

      <h2 id="consultas">Qué podés consultar por WhatsApp</h2>
      <div className="legal-card-grid">
        <article><Smartphone size={25} /><h3>Acceso desde el celular</h3><p>Consultas generales sobre navegación móvil y funcionamiento.</p></article>
        <article><BadgeCheck size={25} /><h3>Promociones</h3><p>Información sobre condiciones, vigencia y requisitos antes de aceptar un beneficio.</p></article>
        <article><SearchCheck size={25} /><h3>Disponibilidad</h3><p>Orientación general sobre acceso y opciones disponibles.</p></article>
        <article><MessageCircle size={25} /><h3>Canal directo</h3><p>Un solo punto de contacto para iniciar tu consulta.</p></article>
      </div>

      <WhatsAppLink className="button button-primary">Consultar por WhatsApp <ExternalLink size={17} /></WhatsAppLink>

      <h2 id="como-funciona">Cómo funciona nuestro canal</h2>
      <ol>
        <li>Abrí cualquiera de los botones de WhatsApp del sitio.</li>
        <li>Escribí tu consulta de forma clara y sin enviar datos sensibles.</li>
        <li>Revisá la información y las condiciones antes de continuar.</li>
        <li>Si decidís jugar, establecé previamente un límite de tiempo y dinero.</li>
      </ol>
      <p>Si tu búsqueda es específicamente por disponibilidad durante todo el día, visitá nuestra página de <Link href="/casino-online-24-horas-whatsapp">casino online 24 horas por WhatsApp</Link>.</p>

      <h2 id="seguridad">Qué revisar antes de continuar</h2>
      <p>En Argentina el juego online se regula por jurisdicción. Verificá las condiciones aplicables a tu ubicación y no compartas contraseñas ni códigos de verificación por mensajes no solicitados.</p>
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
