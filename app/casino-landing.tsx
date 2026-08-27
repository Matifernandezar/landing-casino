"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Camera, ChevronDown, CircleDollarSign, Clock3, Menu, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const INSTAGRAM_URL = "https://www.instagram.com/casino.virtual.online/";
const faqs = [
  ["¿Cómo puedo conocer las promociones vigentes?", "Las promociones se comunican en nuestros canales oficiales. Antes de participar, revisá siempre las condiciones, los límites y la vigencia."],
  ["¿Puedo acceder desde el celular?", "Sí. La experiencia está pensada para dispositivos móviles y para consultas rápidas desde cualquier navegador actualizado."],
  ["¿Esta página procesa pagos o apuestas?", "No. Este sitio es informativo y no recibe pagos, no almacena datos bancarios y no procesa apuestas dentro de la página."],
  ["¿Quiénes pueden utilizar el servicio?", "Únicamente personas mayores de 18 años, dentro de jurisdicciones donde la actividad esté permitida y siempre de acuerdo con la normativa aplicable."],
];

function BrandMark() { return <span className="brand-mark" aria-hidden="true">CV</span>; }

export function CasinoLanding() {
  const [ageGateOpen, setAgeGateOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAgeGateOpen(localStorage.getItem("cva-age-confirmed") !== "true"), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const confirmAge = () => { localStorage.setItem("cva-age-confirmed", "true"); setAgeGateOpen(false); };

  return <main>
    <Dialog open={ageGateOpen} onOpenChange={() => undefined}>
      <DialogContent showCloseButton={false} className="age-dialog" onEscapeKeyDown={(e) => e.preventDefault()} onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader><span className="age-kicker">ACCESO RESPONSABLE</span><DialogTitle>¿Sos mayor de 18 años?</DialogTitle><DialogDescription>Este sitio contiene información relacionada con entretenimiento para adultos. El juego puede generar pérdidas económicas.</DialogDescription></DialogHeader>
        <div className="age-actions"><button type="button" className="button button-primary" onClick={confirmAge}>Sí, soy mayor de 18</button><a className="button button-ghost" href="https://www.google.com/">Salir del sitio</a></div>
      </DialogContent>
    </Dialog>

    <header className="site-header"><div className="container header-inner">
      <a href="#inicio" className="brand" aria-label="Casino Virtual Argentina, inicio"><BrandMark /><span>Casino Virtual<small>ARGENTINA</small></span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="#como-funciona">Cómo funciona</a><a href="#beneficios">Beneficios</a><a href="#preguntas">Preguntas</a><a href="#juego-responsable">Juego responsable</a></nav>
      <a className="button button-small desktop-cta" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Ver canal oficial <ArrowRight size={15} /></a>
      <button className="menu-button" type="button" aria-label="Abrir menú" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((v) => !v)}><Menu size={22} /></button>
    </div>{mobileMenuOpen && <nav className="mobile-nav" aria-label="Navegación móvil">{[["#como-funciona","Cómo funciona"],["#beneficios","Beneficios"],["#preguntas","Preguntas"],["#juego-responsable","Juego responsable"]].map(([href,label]) => <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}</nav>}</header>

    <section id="inicio" className="hero"><div className="hero-image" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" /><div className="container hero-grid">
      <div className="hero-copy"><div className="eyebrow"><span /> Entretenimiento online para mayores de 18</div><h1>Casino virtual en Argentina, simple desde tu celular</h1><p className="hero-lead">Conocé las modalidades disponibles, consultá promociones vigentes y recibí información clara antes de participar.</p>
        <div className="hero-actions"><a className="button button-primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Camera size={19} /> Ver canal oficial</a><a className="text-link" href="#como-funciona">Conocer cómo funciona <ArrowRight size={16} /></a></div>
        <div className="trust-row"><span><BadgeCheck size={17} /> Información clara</span><span><Smartphone size={17} /> Acceso móvil</span><span><ShieldCheck size={17} /> Solo +18</span></div>
      </div>
      <aside className="hero-panel"><div className="panel-topline"><span className="live-dot" /> NOVEDADES DEL DÍA</div><Sparkles className="panel-icon" size={28} /><p className="panel-label">Promoción vigente</p><h2>Consultá las condiciones antes de participar</h2><p>Los beneficios, límites y plazos pueden cambiar. Verificá siempre la información publicada en el canal oficial.</p><a className="panel-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Revisar novedades <ArrowRight size={16} /></a></aside>
    </div></section>

    <section className="proof-strip"><div className="container proof-grid"><div><Smartphone size={23} /><span><strong>100% móvil</strong>Diseñado para tu celular</span></div><div><BadgeCheck size={23} /><span><strong>Información directa</strong>Sin promesas engañosas</span></div><div><Clock3 size={23} /><span><strong>Consulta online</strong>Revisá el canal oficial</span></div><div><ShieldCheck size={23} /><span><strong>Acceso +18</strong>Participación responsable</span></div></div></section>

    <section id="como-funciona" className="section section-light"><div className="container"><div className="section-heading centered"><span className="section-kicker">PASO A PASO</span><h2>Todo empieza con información clara</h2><p>Un recorrido simple para entender las condiciones antes de tomar una decisión.</p></div><div className="steps-grid">
      <article className="step-card"><span className="step-number">01</span><Smartphone size={28} /><h3>Explorá desde tu celular</h3><p>Ingresá al sitio y conocé cómo funciona la experiencia.</p></article>
      <article className="step-card featured"><span className="step-number">02</span><BadgeCheck size={28} /><h3>Revisá las condiciones</h3><p>Confirmá promociones, vigencia, requisitos y límites en el canal oficial.</p></article>
      <article className="step-card"><span className="step-number">03</span><ShieldCheck size={28} /><h3>Decidí responsablemente</h3><p>Participá solo si sos mayor de edad y podés asumir el riesgo de pérdida.</p></article>
    </div></div></section>

    <section id="beneficios" className="section benefits-section"><div className="container benefits-grid"><div className="benefits-copy"><span className="section-kicker">UNA EXPERIENCIA MÁS CLARA</span><h2>Información útil, sin vueltas</h2><p>Casino Virtual Argentina reúne lo esencial para que puedas informarte desde el celular, verificar novedades y reconocer los canales oficiales.</p><a className="button button-primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Ir a Instagram <ArrowRight size={17} /></a></div><div className="benefit-cards">
      <article><Smartphone size={25} /><h3>Experiencia mobile</h3><p>Navegación rápida y cómoda desde pantallas pequeñas.</p></article><article><Sparkles size={25} /><h3>Novedades vigentes</h3><p>Acceso directo al canal donde se publican promociones.</p></article><article><ShieldCheck size={25} /><h3>Juego responsable</h3><p>Recordatorios visibles sobre edad, límites y riesgos.</p></article><article><CircleDollarSign size={25} /><h3>Sin promesas falsas</h3><p>El juego no garantiza ganancias y siempre implica riesgo.</p></article>
    </div></div></section>

    <section id="juego-responsable" className="section responsible-section"><div className="container responsible-card"><div className="responsible-icon"><ShieldCheck size={34} /></div><div><span className="section-kicker">JUEGO RESPONSABLE</span><h2>Que siga siendo entretenimiento</h2><p>Definí un límite antes de empezar, no persigas pérdidas y nunca utilices dinero destinado a comida, alquiler, deudas u otros gastos esenciales. Si jugar deja de ser divertido o afecta tu vida cotidiana, frená y buscá ayuda profesional.</p></div><ul><li><BadgeCheck size={17} /> Solo mayores de 18 años</li><li><BadgeCheck size={17} /> Establecé límites de tiempo y dinero</li><li><BadgeCheck size={17} /> No juegues para recuperar pérdidas</li></ul></div></section>

    <section id="preguntas" className="section faq-section"><div className="container faq-grid"><div className="section-heading"><span className="section-kicker">PREGUNTAS FRECUENTES</span><h2>Lo que necesitás saber</h2><p>Respuestas directas antes de visitar nuestros canales.</p></div><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container final-cta-inner"><div><span className="section-kicker">CANAL OFICIAL</span><h2>Consultá las novedades vigentes</h2><p>Encontrá promociones, condiciones y actualizaciones en nuestro Instagram.</p></div><a className="button button-primary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Camera size={19} /> @casino.virtual.online</a></div></section>
    <footer><div className="container footer-grid"><div className="brand footer-brand"><BrandMark /><span>Casino Virtual<small>ARGENTINA</small></span></div><p>Sitio informativo para mayores de 18 años. No procesamos pagos ni apuestas.</p><div className="footer-links"><a href="#juego-responsable">Juego responsable</a><a href="#preguntas">Preguntas frecuentes</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Casino Virtual Argentina</span><span>El juego implica riesgo de pérdida.</span></div></footer>
  </main>;
}
