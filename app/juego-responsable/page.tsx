import type { Metadata } from "next";
import { AlertTriangle, Ban, Brain, Clock3, HeartHandshake, Phone, ShieldCheck, WalletCards } from "lucide-react";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Juego responsable: límites, señales y ayuda en Argentina";
const description = "Herramientas para mantener el juego como entretenimiento, reconocer señales de riesgo, usar la autoexclusión y encontrar ayuda profesional en Argentina.";
const path = "/juego-responsable";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function ResponsibleGamingPage() {
  return (
    <ArticleLayout
      kicker="JUEGO RESPONSABLE"
      title={title}
      description={description}
      readingTime="7 minutos de lectura"
      showOperator={false}
      toc={[
        { href: "#principios", label: "Principios básicos" },
        { href: "#senales", label: "Señales de riesgo" },
        { href: "#herramientas", label: "Herramientas de control" },
        { href: "#ayuda", label: "Dónde pedir ayuda" },
      ]}
    >
      <p>El juego responsable significa participar de manera voluntaria, informada y dentro de límites que no afecten la salud, las relaciones ni la economía personal. <strong>El casino no es una fuente de ingresos</strong>: todos los juegos de azar están diseñados con una ventaja para el operador.</p>
      <div className="article-callout"><ShieldCheck size={26} /><p>Si jugás, que sea solo por diversión. Nunca utilices dinero de alquiler, comida, estudios, salud, deudas o ahorro de emergencia.</p></div>

      <h2 id="principios">Principios básicos antes de jugar</h2>
      <div className="legal-card-grid">
        <article><WalletCards size={25} /><h3>Presupuesto cerrado</h3><p>Definí previamente una cantidad que podés perder y no la aumentes durante la sesión.</p></article>
        <article><Clock3 size={25} /><h3>Tiempo limitado</h3><p>Elegí una duración, configurá una alarma y finalizá aunque el resultado sea negativo.</p></article>
        <article><Brain size={25} /><h3>Decisión consciente</h3><p>No juegues bajo efectos de alcohol, sustancias, enojo, tristeza o ansiedad intensa.</p></article>
        <article><Ban size={25} /><h3>Sin perseguir pérdidas</h3><p>Perder no genera una deuda del juego con vos. Apostar más no garantiza recuperar nada.</p></article>
      </div>

      <h2 id="senales">Señales de que el juego dejó de ser entretenimiento</h2>
      <ul>
        <li>Pensás constantemente en apostar o en recuperar una pérdida.</li>
        <li>Ocultás a familiares cuánto tiempo o dinero destinás al juego.</li>
        <li>Pedís préstamos, vendés objetos o atrasás obligaciones para apostar.</li>
        <li>Aumentás los montos para experimentar la misma emoción.</li>
        <li>Intentaste frenar y no pudiste mantener la decisión.</li>
        <li>El juego está afectando tu trabajo, estudio, sueño o relaciones.</li>
        <li>Sentís ansiedad, culpa, irritabilidad o desesperación después de jugar.</li>
      </ul>
      <div className="article-callout"><AlertTriangle size={26} /><p>No es necesario esperar a perder una suma grande. Una sola señal que te preocupe alcanza para pausar y pedir orientación.</p></div>

      <h2 id="herramientas">Herramientas que podés utilizar</h2>
      <h3>Límites de depósito y tiempo</h3>
      <p>Configurá límites directamente en la cuenta antes de jugar. Elegí montos basados en tu presupuesto real, no en lo que esperás ganar.</p>
      <h3>Pausa temporal</h3>
      <p>Si notás impulsividad, solicitá un período sin acceso. Desinstalar una aplicación no siempre alcanza: utilizá las funciones formales de bloqueo.</p>
      <h3>Autoexclusión</h3>
      <p>La autoexclusión impide acceder durante el plazo establecido. Consultá al operador y al organismo regulador de tu jurisdicción para conocer el procedimiento disponible.</p>
      <h3>Bloqueo financiero</h3>
      <p>Pedí ayuda a una persona de confianza, reducí límites de medios de pago y evitá tener acceso inmediato a dinero durante momentos de impulso.</p>

      <h2 id="ayuda">Dónde pedir ayuda en Argentina</h2>
      <p>El Gobierno argentino reúne recursos provinciales para personas que necesitan asistencia por juego compulsivo. La atención y los mecanismos de autoexclusión cambian según la jurisdicción.</p>
      <div className="check-table">
        <div><strong>Orientación nacional</strong><span>Sedronar brinda atención gratuita y anónima las 24 horas mediante la línea 141.</span></div>
        <div><strong>CABA</strong><span>Programa Saber Jugar y herramientas de orientación y autoexclusión de la Ciudad.</span></div>
        <div><strong>Provincia de Buenos Aires</strong><span>Programa de Prevención y Asistencia al Juego Compulsivo de Lotería de la Provincia.</span></div>
        <div><strong>Córdoba</strong><span>Programa provincial de Juego Responsable y línea gratuita 0800-222-3444.</span></div>
        <div><strong>Otras provincias</strong><span>Consultá el organismo de loterías correspondiente o el directorio nacional de recursos.</span></div>
      </div>
      <p><a href="https://www.argentina.gob.ar/tema/cuidarlasalud" target="_blank" rel="noopener noreferrer">Ver recursos oficiales de salud y juego compulsivo</a> · <a href="https://www.argentina.gob.ar/salud/sedronar" target="_blank" rel="noopener noreferrer"><Phone size={14} /> Línea 141 de Sedronar</a> · <a href="https://www.alea.org.ar/juego-responsable" target="_blank" rel="noopener noreferrer">Información de juego responsable de ALEA</a>.</p>

      <h2>Si estás atravesando una crisis</h2>
      <p>Interrumpí inmediatamente el acceso al juego, alejate de los medios de pago y hablá con alguien de confianza. Buscá atención profesional o comunicate con un servicio de emergencia de tu localidad si existe riesgo para tu seguridad.</p>
      <div className="article-callout"><HeartHandshake size={26} /><p>Pedir ayuda es una decisión de cuidado, no un fracaso. Los problemas con el juego pueden tratarse y no tenés que atravesarlos solo.</p></div>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
