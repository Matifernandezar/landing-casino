import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  ExternalLink,
  Gamepad2,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { siteConfig } from "./site-config";

const reelUrl = "https://www.instagram.com/reel/DTJR3h3kdaR/";

const faqs = [
  {
    question: "¿Puedo consultar por WhatsApp las 24 horas?",
    answer: "Sí. El canal permite dejar consultas durante las 24 horas. El tiempo de respuesta puede variar según la disponibilidad del momento.",
  },
  {
    question: "¿Cómo funciona un casino online por WhatsApp?",
    answer: "WhatsApp funciona como canal de atención para consultar sobre acceso, promociones y funcionamiento. La actividad de juego debe realizarse dentro de la plataforma correspondiente.",
  },
  {
    question: "¿Puedo consultar desde el celular?",
    answer: "Sí. La web está optimizada para móviles y todos los botones principales abren el canal de WhatsApp desde el teléfono.",
  },
  {
    question: "¿Puedo consultar sobre fichas y promociones?",
    answer: "Sí. Podés preguntar por disponibilidad, condiciones y funcionamiento antes de continuar. Revisá siempre términos, límites y requisitos de cualquier promoción.",
  },
  {
    question: "¿El sitio está dirigido a menores?",
    answer: "No. Todo el contenido y los canales de atención están destinados exclusivamente a mayores de 18 años.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <Image
          className="hero-image"
          src="/casino-hero.webp"
          alt="Casino online en Argentina con atención desde el celular"
          fill
          priority
          sizes="100vw"
          quality={72}
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ARGENTINA · +18 · ATENCIÓN ONLINE</div>
            <h1>Casino online por WhatsApp 24 horas en Argentina</h1>
            <p className="hero-lead">Consultá desde el celular sobre acceso, promociones, juegos y funcionamiento. Un canal directo de WhatsApp disponible las 24 horas para mayores de 18 años.</p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary">Consultar por WhatsApp <MessageCircle size={18} /></WhatsAppLink>
              <Link className="text-link" href="/casino-online-24-horas-whatsapp">Ver cómo funciona 24 horas</Link>
            </div>
            <a className="hero-instagram" href={reelUrl} target="_blank" rel="noopener noreferrer"><Camera size={16} /> Ver el Reel que ya aparece en búsquedas</a>
            <div className="trust-row">
              <span><Clock3 size={17} /> Canal disponible 24 horas</span>
              <span><Smartphone size={17} /> Acceso desde el celular</span>
              <span><UserCheck size={17} /> Exclusivo para mayores de 18</span>
            </div>
          </div>

          <aside className="operator-card" aria-label="Atención por WhatsApp 24 horas">
            <div className="operator-card-top">
              <span className="editorial-badge"><BadgeCheck size={14} /> CANAL DIRECTO</span>
              <span className="review-date">Actualizado: {siteConfig.updatedAt}</span>
            </div>
            <div className="operator-identity">
              <div className="operator-monogram" aria-hidden="true">24H</div>
              <div><p>CONSULTAS ONLINE</p><h2>{siteConfig.whatsapp.label}</h2></div>
            </div>
            <p className="operator-summary">Abrí WhatsApp y consultá desde tu celular. No necesitás completar formularios para iniciar una conversación.</p>
            <div className="jurisdiction-list" aria-label="Características de la atención">
              <span><MessageCircle size={13} /> Canal directo</span>
              <span><Smartphone size={13} /> Mobile first</span>
            </div>
            <ul className="operator-features">
              <li><Check size={16} /> Consultas sobre acceso y funcionamiento</li>
              <li><Check size={16} /> Información sobre promociones y condiciones</li>
              <li><Check size={16} /> Atención orientada a usuarios de Argentina</li>
            </ul>
            <WhatsAppLink className="button button-primary button-block">Abrir WhatsApp ahora <MessageCircle size={17} /></WhatsAppLink>
            <p className="operator-note">Solo +18. El juego implica riesgo de pérdida.</p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Ventajas del canal">
        <div className="container proof-grid">
          <div><Clock3 size={23} /><span><strong>24 horas</strong>Dejá tu consulta en cualquier momento</span></div>
          <div><MessageCircle size={23} /><span><strong>WhatsApp directo</strong>Un solo canal de contacto</span></div>
          <div><Smartphone size={23} /><span><strong>Desde el celular</strong>Navegación rápida y responsive</span></div>
          <div><ShieldCheck size={23} /><span><strong>+18</strong>Información y juego responsable</span></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container content-split">
          <div className="section-heading">
            <span className="section-kicker">BÚSQUEDA QUE YA ESTÁ FUNCIONANDO</span>
            <h2>Casino online por WhatsApp, atención 24 horas en Argentina</h2>
            <p>Este es el mismo enfoque con el que nuestro contenido de Instagram ya empezó a recibir clics desde búsquedas. La web y el contenido social ahora trabajan sobre la misma intención.</p>
            <div className="hero-actions">
              <a className="button button-dark" href={reelUrl} target="_blank" rel="noopener noreferrer">Ver Reel en Instagram <ExternalLink size={17} /></a>
              <WhatsAppLink className="button button-primary">Consultar ahora <MessageCircle size={17} /></WhatsAppLink>
            </div>
          </div>
          <div className="instagram-reel-shell">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={reelUrl}
              data-instgrm-version="14"
              style={{ background: "#fff", border: 0, borderRadius: 12, margin: "0 auto", maxWidth: 540, minWidth: 280, width: "100%" }}
            >
              <div className="instagram-fallback">
                <Camera size={32} />
                <strong>Casino online por WhatsApp · Atención 24 horas en Argentina</strong>
                <a href={reelUrl} target="_blank" rel="noopener noreferrer">Abrir Reel en Instagram</a>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading centered dark-copy"><span className="section-kicker">CÓMO EMPEZAR</span><h2>De Google o Instagram a WhatsApp en tres pasos</h2><p>Un recorrido corto y claro, sin formularios intermedios.</p></div>
          <div className="steps-grid">
            <article className="step-card"><span>01</span><SearchCheck size={27} /><h3>Encontranos</h3><p>Llegá desde Google, Instagram o directamente desde esta web.</p></article>
            <article className="step-card featured"><span>02</span><MessageCircle size={27} /><h3>Abrí WhatsApp</h3><p>Usá cualquiera de los botones verdes para iniciar la consulta desde el celular.</p></article>
            <article className="step-card"><span>03</span><Smartphone size={27} /><h3>Consultá</h3><p>Preguntá sobre acceso, promociones, juegos o funcionamiento antes de continuar.</p></article>
          </div>
        </div>
      </section>

      <section className="section games-section">
        <div className="container content-split">
          <div className="section-heading"><span className="section-kicker">CASINO ONLINE ARGENTINA</span><h2>Consultas sobre juegos, promociones y acceso móvil</h2><p>Centralizamos la información que más suele buscar quien llega desde Google o redes sociales.</p><WhatsAppLink className="button button-primary">Consultar disponibilidad <MessageCircle size={17} /></WhatsAppLink></div>
          <div className="game-list">
            <article><Sparkles size={24} /><div><h3>Tragamonedas y slots</h3><p>Consultá por disponibilidad y funcionamiento desde el celular.</p></div></article>
            <article><Gamepad2 size={24} /><div><h3>Casino en vivo</h3><p>Información sobre ruleta, blackjack y otras modalidades disponibles.</p></div></article>
            <article><CircleDollarSign size={24} /><div><h3>Promociones</h3><p>Consultá condiciones, requisitos y vigencia antes de aceptar un beneficio.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-light guides-section">
        <div className="container">
          <div className="section-heading centered"><span className="section-kicker">RUTAS PRINCIPALES</span><h2>Entrá por la búsqueda que mejor coincide con tu consulta</h2><p>Cada página responde una intención concreta y termina en el mismo canal directo de WhatsApp.</p></div>
          <div className="guide-grid">
            <Link href="/casino-online-24-horas-whatsapp"><Clock3 size={26} /><span>24 HORAS</span><h3>Casino online 24 horas por WhatsApp</h3><p>La landing principal para consultas disponibles durante todo el día.</p><strong>Ver página <ArrowRight size={15} /></strong></Link>
            <Link href="/casino-online-whatsapp-argentina"><MessageCircle size={26} /><span>WHATSAPP</span><h3>Casino online por WhatsApp Argentina</h3><p>Consultas directas desde el celular para usuarios de Argentina.</p><strong>Ver página <ArrowRight size={15} /></strong></Link>
            <Link href="/casino-fichas-whatsapp"><CircleDollarSign size={26} /><span>FICHAS</span><h3>Casino fichas por WhatsApp</h3><p>Información sobre fichas, acceso y condiciones antes de continuar.</p><strong>Ver página <ArrowRight size={15} /></strong></Link>
            <Link href="/casino-online-desde-el-celular"><Smartphone size={26} /><span>MÓVIL</span><h3>Casino online desde el celular</h3><p>Guía enfocada en navegación y experiencia móvil.</p><strong>Ver página <ArrowRight size={15} /></strong></Link>
          </div>
        </div>
      </section>

      <section className="instagram-band">
        <div className="container instagram-band-inner">
          <div className="instagram-icon"><Camera size={28} /></div>
          <div><span>INSTAGRAM + GOOGLE</span><h2>Seguinos en {siteConfig.instagram.handle}</h2><p>Publicamos Reels enfocados en las mismas búsquedas que trabajamos en la web para reforzar la presencia de la marca.</p></div>
          <a className="button button-instagram" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Abrir Instagram <ExternalLink size={16} /></a>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading dark-copy"><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2>Casino online por WhatsApp: lo esencial</h2><p>Respuestas rápidas sobre atención 24 horas, celular, fichas y promociones.</p></div>
          <div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner"><div><span className="section-kicker">ATENCIÓN POR WHATSAPP 24 HORAS</span><h2>¿Querés hacer una consulta?</h2><p>Abrí WhatsApp desde el celular. Solo mayores de 18 años; el juego implica riesgo de pérdida.</p></div><WhatsAppLink className="button button-dark">Abrir WhatsApp <MessageCircle size={17} /></WhatsAppLink></div>
      </section>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
