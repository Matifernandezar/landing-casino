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
  LockKeyhole,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  UserCheck,
  WalletCards,
} from "lucide-react";
import { AffiliateLink } from "./affiliate-link";
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
    question: "¿Cuál es el casino online recomendado?",
    answer: "Nuestra opción destacada actual es Betsson Argentina para usuarios habilitados de CABA, Provincia de Buenos Aires y Córdoba. La disponibilidad depende de tu ubicación y debe confirmarse antes del registro.",
  },
  {
    question: "¿Este sitio recibe depósitos o paga premios?",
    answer: "No. Casino Virtual Argentina es una guía independiente. El registro, la verificación, los depósitos, el juego y los retiros se realizan exclusivamente dentro del operador autorizado.",
  },
  {
    question: "¿Es seguro cargar saldo por WhatsApp?",
    answer: "Un contacto de WhatsApp no reemplaza una licencia ni un dominio oficial. Para reducir riesgos, no transfieras dinero a cuentas personales: depositá únicamente desde la plataforma autorizada y verificá que el dominio termine en .bet.ar.",
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

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casino online destacado en Argentina",
  numberOfItems: 1,
  itemListElement: [{
    "@type": "ListItem",
    position: 1,
    name: siteConfig.featuredOperator.name,
    url: siteConfig.featuredOperator.url,
  }],
};

export default function Home() {
  return (
    <main id="contenido">
      <section className="hero">
        <Image className="hero-image" src="/casino-hero.png" alt="Mesa de casino elegante con luces doradas y tonos verdes" fill priority sizes="100vw" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> GUÍA ARGENTINA · ACTUALIZADA EN 2026</div>
            <h1>Casino virtual en Argentina: elegí un sitio autorizado</h1>
            <p className="hero-lead">Verificamos licencias, seguridad y condiciones para ayudarte a llegar a un casino online oficial, sin intermediarios y desde tu celular.</p>
            <div className="hero-actions">
              <AffiliateLink className="button button-primary">Ver casino recomendado <ArrowRight size={18} /></AffiliateLink>
              <Link className="text-link" href="/casinos-online-legales-argentina">Cómo comprobar si es legal</Link>
            </div>
            <a className="hero-instagram" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer"><Camera size={16} /> Bonos, novedades y guías en {siteConfig.instagram.handle}</a>
            <div className="trust-row">
              <span><ShieldCheck size={17} /> Dominio .bet.ar</span>
              <span><UserCheck size={17} /> Registro +18 con verificación</span>
              <span><LockKeyhole size={17} /> Sin transferencias a terceros</span>
            </div>
          </div>

          <aside className="operator-card" aria-label="Casino online destacado">
            <div className="operator-card-top">
              <span className="editorial-badge"><BadgeCheck size={14} /> ELECCIÓN EDITORIAL</span>
              <span className="review-date">Revisado: {siteConfig.updatedAt}</span>
            </div>
            <div className="operator-identity">
              <div className="operator-monogram" aria-hidden="true">B</div>
              <div><p>CASINO ONLINE DESTACADO</p><h2>{siteConfig.featuredOperator.name}</h2></div>
            </div>
            <p className="operator-summary">Operador con presencia regulada en tres jurisdicciones argentinas y acceso mediante dominios oficiales .bet.ar.</p>
            <div className="jurisdiction-list" aria-label="Jurisdicciones verificadas">
              {siteConfig.featuredOperator.jurisdictions.map((item) => <span key={item}><MapPin size={13} /> {item}</span>)}
            </div>
            <ul className="operator-features">
              <li><Check size={16} /> Cuenta en pesos argentinos</li>
              <li><Check size={16} /> Casino y apuestas desde el celular</li>
              <li><Check size={16} /> Identidad y ubicación verificadas</li>
            </ul>
            <AffiliateLink className="button button-primary button-block">Visitar sitio oficial <ExternalLink size={17} /></AffiliateLink>
            <p className="operator-note">Solo +18. Aplican términos y restricciones geográficas.</p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Principios del sitio">
        <div className="container proof-grid">
          <div><SearchCheck size={23} /><span><strong>Licencia comprobable</strong>Revisamos el dominio oficial</span></div>
          <div><FileCheck2 size={23} /><span><strong>Condiciones visibles</strong>Sin promesas de ganar</span></div>
          <div><WalletCards size={23} /><span><strong>Sin intermediarios</strong>El operador procesa tu dinero</span></div>
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
          </div>
          <div className="criteria-grid">
            <article><Landmark size={25} /><h3>Regulación local</h3><p>Presencia declarada en CABA, PBA y Córdoba, sujeta a la ubicación del jugador.</p></article>
            <article><LockKeyhole size={25} /><h3>Cuenta personal</h3><p>Registro y verificación dentro del operador, sin entregar dinero a un cajero.</p></article>
            <article><Smartphone size={25} /><h3>Experiencia móvil</h3><p>Navegación, juegos, depósitos y retiros desde una misma plataforma.</p></article>
            <article><BookOpenCheck size={25} /><h3>Condiciones accesibles</h3><p>Términos, privacidad y juego responsable disponibles antes de participar.</p></article>
          </div>
        </div>
        <div className="container source-note"><BadgeCheck size={18} /><p>Verificación editorial: Betsson informa licencias en Ciudad de Buenos Aires, Provincia de Buenos Aires y Córdoba. Confirmá siempre tu ubicación y el dominio final antes de crear una cuenta.</p></div>
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
          <div className="section-heading"><span className="section-kicker">CASINO ONLINE</span><h2>Encontrá tu tipo de juego en una sola plataforma</h2><p>La oferta puede variar según el operador y la jurisdicción. Antes de jugar, revisá reglas, límites y retorno teórico de cada título.</p><AffiliateLink className="button button-primary">Explorar juegos disponibles <ArrowRight size={17} /></AffiliateLink></div>
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
        <div className="container final-cta-inner"><div><span className="section-kicker">OPERADOR DESTACADO</span><h2>Entrá siempre por el sitio oficial</h2><p>Verificá tu jurisdicción. Solo mayores de 18 años. Aplican términos y condiciones.</p></div><AffiliateLink className="button button-dark">Visitar {siteConfig.featuredOperator.name} <ExternalLink size={17} /></AffiliateLink></div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
    </main>
  );
}
