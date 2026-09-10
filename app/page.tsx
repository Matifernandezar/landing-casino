import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Camera,
  Check,
  ChevronDown,
  CircleDollarSign,
  ExternalLink,
  FileCheck2,
  Gamepad2,
  Landmark,
  MapPin,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  UserCheck,
  WalletCards,
} from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import { siteConfig } from "./site-config";

const faqs = [
  {
    question: "¿Los casinos online son legales en Argentina?",
    answer: "Sí, cuando el operador cuenta con autorización de la autoridad correspondiente a la provincia donde se encuentra el jugador. En Argentina no existe una única licencia nacional para todo el territorio.",
  },
  {
    question: "¿Cómo reconozco un casino virtual autorizado?",
    answer: "Comprobá que utilice un dominio terminado en .bet.ar, verificá la jurisdicción indicada al pie del sitio y confirmá que figure en el listado de la autoridad de loterías correspondiente.",
  },
  {
    question: "¿Cómo puedo hacer una consulta?",
    answer: "Podés comunicarte directamente desde cualquiera de los botones de WhatsApp del sitio. Antes de registrarte o transferir dinero, verificá siempre la plataforma, sus condiciones y la regulación aplicable en tu provincia.",
  },
  {
    question: "¿Este sitio recibe depósitos o paga premios?",
    answer: "La página web no procesa pagos ni apuestas. Los botones abren nuestro canal de atención por WhatsApp, donde podés realizar una consulta antes de continuar.",
  },
  {
    question: "¿WhatsApp demuestra que una plataforma es legal?",
    answer: "No. Un contacto de WhatsApp no reemplaza una licencia ni un dominio oficial. Antes de registrarte o transferir dinero, verificá la plataforma, sus condiciones y la regulación aplicable.",
  },
  {
    question: "¿Los bonos garantizan ganancias?",
    answer: "No. Un bono tiene requisitos, vencimiento y condiciones de apuesta. Nunca elimina el riesgo de pérdida y no debería ser el único criterio para elegir una plataforma.",
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
          alt="Mesa de casino elegante con luces doradas y tonos verdes"
          fill
          priority
          sizes="100vw"
          quality={72}
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> GUÍA ARGENTINA · ACTUALIZADA EN 2026</div>
            <h1>Casino virtual en Argentina con atención por WhatsApp</h1>
            <p className="hero-lead">Información clara sobre casino online en Argentina, con guías propias y un canal directo de atención por WhatsApp.</p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary">Consultar por WhatsApp <MessageCircle size={18} /></WhatsAppLink>
              <Link className="text-link" href="/casinos-online-legales-argentina">Cómo comprobar si es legal</Link>
            </div>
            <a className="hero-instagram" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><Camera size={16} /> Bonos, novedades y guías en {siteConfig.instagram.handle}</a>
            <div className="trust-row">
              <span><ShieldCheck size={17} /> Dominio .bet.ar</span>
              <span><UserCheck size={17} /> Registro +18 con verificación</span>
              <span><MessageCircle size={17} /> Atención directa por WhatsApp</span>
            </div>
          </div>

          <aside className="operator-card" aria-label="Atención por WhatsApp">
            <div className="operator-card-top">
              <span className="editorial-badge"><BadgeCheck size={14} /> ATENCIÓN DIRECTA</span>
              <span className="review-date">Revisado: {siteConfig.updatedAt}</span>
            </div>
            <div className="operator-identity">
              <div className="operator-monogram" aria-hidden="true">CV</div>
              <div><p>CANAL DE CONSULTAS</p><h2>{siteConfig.whatsapp.label}</h2></div>
            </div>
            <p className="operator-summary">Escribinos para resolver dudas sobre acceso, promociones y funcionamiento antes de continuar.</p>
            <div className="jurisdiction-list" aria-label="Características de la atención">
              <span><MessageCircle size={13} /> Respuesta directa</span>
              <span><Smartphone size={13} /> Desde el celular</span>
            </div>
            <ul className="operator-features">
              <li><Check size={16} /> Canal centralizado de atención</li>
              <li><Check size={16} /> Información clara antes de jugar</li>
              <li><Check size={16} /> Acceso exclusivo para mayores de 18 años</li>
            </ul>
            <WhatsAppLink className="button button-primary button-block">Abrir WhatsApp <MessageCircle size={17} /></WhatsAppLink>
            <p className="operator-note">Solo +18. El juego implica riesgo de pérdida.</p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Principios del sitio">
        <div className="container proof-grid">
          <div><SearchCheck size={23} /><span><strong>Licencia comprobable</strong>Revisamos el dominio oficial</span></div>
          <div><FileCheck2 size={23} /><span><strong>Condiciones visibles</strong>Sin promesas de ganar</span></div>
          <div><WalletCards size={23} /><span><strong>Información antes de jugar</strong>Consultá condiciones y límites</span></div>
          <div><ShieldCheck size={23} /><span><strong>Juego responsable</strong>Solo para mayores de 18</span></div>
        </div>
      </section>

      <section id="recomendado" className="section section-light">
        <div className="container recommendation-grid">
          <div className="section-heading">
            <span className="section-kicker">NUESTRA OPCIÓN DESTACADA</span>
            <h2>Una recomendación basada en señales que podés verificar</h2>
            <p>No elegimos por el bono más llamativo. Priorizamos que el jugador pueda identificar al operador, revisar su jurisdicción y gestionar todo dentro de una plataforma oficial.</p>
            <Link className="inline-link" href="/metodologia">Conocé nuestra metodología completa <ArrowRight size={15} /></Link>
            <p>Si preferís resolver una duda antes de continuar, consultá nuestra guía de <Link className="inline-link" href="/casino-online-whatsapp-argentina">casino online por WhatsApp 24 horas en Argentina <ArrowRight size={15} /></Link>.</p>
          </div>
          <div className="criteria-grid">
            <article><Landmark size={25} /><h3>Información local</h3><p>Contenido orientado a usuarios argentinos y a la regulación de cada jurisdicción.</p></article>
            <article><MessageCircle size={25} /><h3>Atención directa</h3><p>Un único canal de WhatsApp para resolver consultas antes de continuar.</p></article>
            <article><Smartphone size={25} /><h3>Experiencia móvil</h3><p>Navegación, juegos, depósitos y retiros desde una misma plataforma.</p></article>
            <article><BookOpenCheck size={25} /><h3>Condiciones accesibles</h3><p>Términos, privacidad y juego responsable disponibles antes de participar.</p></article>
          </div>
        </div>
        <div className="container source-note"><BadgeCheck size={18} /><p>Antes de registrarte, verificá siempre tu ubicación, el dominio final, las condiciones y la autoridad reguladora correspondiente a tu provincia.</p></div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading centered dark-copy"><span className="section-kicker">ANTES DE JUGAR</span><h2>Tres controles que te evitan problemas</h2><p>La decisión segura ocurre antes del primer depósito.</p></div>
          <div className="steps-grid">
            <article className="step-card"><span>01</span><MapPin size={27} /><h3>Confirmá tu provincia</h3><p>La habilitación cambia según la jurisdicción. Un operador puede estar disponible en una provincia y no en otra.</p></article>
            <article className="step-card featured"><span>02</span><SearchCheck size={27} /><h3>Revisá el dominio</h3><p>Buscá la terminación .bet.ar y los datos del operador. No deposites mediante perfiles o cuentas personales.</p></article>
            <article className="step-card"><span>03</span><TimerReset size={27} /><h3>Definí un límite</h3><p>Elegí cuánto tiempo y dinero podés destinar sin afectar gastos esenciales. No persigas pérdidas.</p></article>
          </div>
        </div>
      </section>

      <section className="section games-section">
        <div className="container content-split">
          <div className="section-heading"><span className="section-kicker">CASINO ONLINE</span><h2>Encontrá tu tipo de juego en una sola plataforma</h2><p>La oferta puede variar según el operador y la jurisdicción. Antes de jugar, revisá reglas, límites y retorno teórico de cada título.</p><WhatsAppLink className="button button-primary">Consultar disponibilidad <MessageCircle size={17} /></WhatsAppLink></div>
          <div className="game-list">
            <article><Sparkles size={24} /><div><h3>Tragamonedas y slots</h3><p>Juegos de distintos proveedores, niveles de volatilidad y funciones.</p></div></article>
            <article><Gamepad2 size={24} /><div><h3>Casino en vivo</h3><p>Ruleta, blackjack y mesas transmitidas en tiempo real.</p></div></article>
            <article><CircleDollarSign size={24} /><div><h3>Promociones</h3><p>Beneficios sujetos a requisitos de apuesta, plazo y elegibilidad.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section bonus-section">
        <div className="container bonus-panel">
          <div><span className="section-kicker">BONOS SIN LETRA CHICA ESCONDIDA</span><h2>El número grande importa menos que las condiciones</h2><p>Antes de aceptar una promoción, mirá cuánto tenés que apostar, qué juegos participan, cuándo vence y cuál es el retiro máximo permitido.</p></div>
          <ul><li><Check size={17} /> Requisito de apuesta</li><li><Check size={17} /> Depósito mínimo</li><li><Check size={17} /> Juegos elegibles</li><li><Check size={17} /> Fecha de vencimiento</li></ul>
          <Link className="button button-dark" href="/bonos-casino-online-argentina">Aprender a comparar bonos <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="instagram-band">
        <div className="container instagram-band-inner">
          <div className="instagram-icon"><Camera size={28} /></div>
          <div><span>COMUNIDAD Y NOVEDADES</span><h2>Seguinos en {siteConfig.instagram.handle}</h2><p>Contenido corto, novedades del sitio y explicaciones para reconocer plataformas autorizadas.</p></div>
          <a className="button button-instagram" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Abrir Instagram <ExternalLink size={16} /></a>
        </div>
      </section>

      <section className="section section-light guides-section">
        <div className="container">
          <div className="section-heading centered"><span className="section-kicker">GUÍAS DE CASINO VIRTUAL</span><h2>Respuestas útiles antes de registrarte</h2><p>Contenido propio para decidir con más información y menos riesgo.</p></div>
          <div className="guide-grid">
            <Link href="/casino-online-whatsapp-argentina"><MessageCircle size={26} /><span>ATENCIÓN DIRECTA</span><h3>Casino online por WhatsApp 24 horas</h3><p>Qué podés consultar y qué controles hacer antes de registrarte.</p><strong>Leer guía <ArrowRight size={15} /></strong></Link>
            <Link href="/casinos-online-legales-argentina"><ShieldCheck size={26} /><span>SEGURIDAD</span><h3>Casinos online legales en Argentina</h3><p>Cómo funcionan las licencias provinciales y qué significa .bet.ar.</p><strong>Leer guía <ArrowRight size={15} /></strong></Link>
            <Link href="/casino-online-desde-el-celular"><Smartphone size={26} /><span>GUÍA MÓVIL</span><h3>Casino online desde el celular</h3><p>Registro, identidad, depósitos y controles desde un dispositivo móvil.</p><strong>Leer guía <ArrowRight size={15} /></strong></Link>
            <Link href="/bonos-casino-online-argentina"><CircleDollarSign size={26} /><span>PROMOCIONES</span><h3>Bonos de casino online</h3><p>Cómo interpretar requisitos y reconocer una oferta poco conveniente.</p><strong>Leer guía <ArrowRight size={15} /></strong></Link>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <div className="section-heading dark-copy"><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2>Lo esencial, sin vueltas</h2><p>Información directa sobre legalidad, seguridad, bonos y depósitos.</p></div>
          <div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner"><div><span className="section-kicker">ATENCIÓN DIRECTA</span><h2>¿Tenés una consulta?</h2><p>Escribinos por WhatsApp. Solo mayores de 18 años; el juego implica riesgo de pérdida.</p></div><WhatsAppLink className="button button-dark">Abrir WhatsApp <MessageCircle size={17} /></WhatsAppLink></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
