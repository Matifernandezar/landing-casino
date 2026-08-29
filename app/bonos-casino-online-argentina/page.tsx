import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Calculator, Clock3, ExternalLink, FileText, Gift, ShieldCheck } from "lucide-react";
import { AffiliateLink } from "../affiliate-link";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Bonos de casino online en Argentina: guía sin letra chica";
const description = "Aprendé a comparar bonos de bienvenida, requisitos de apuesta, vencimientos y límites antes de aceptar una promoción de casino online.";
const path = "/bonos-casino-online-argentina";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function CasinoBonusPage() {
  return (
    <ArticleLayout
      kicker="BONOS Y PROMOCIONES"
      title={title}
      description={description}
      readingTime="7 minutos de lectura"
      toc={[
        { href: "#como-funcionan", label: "Cómo funcionan" },
        { href: "#rollover", label: "Requisito de apuesta" },
        { href: "#comparar", label: "Qué comparar" },
        { href: "#ejemplo", label: "Ejemplo práctico" },
        { href: "#alertas", label: "Señales de alerta" },
      ]}
    >
      <p>Un bono de casino puede agregar saldo promocional, giros o beneficios a una cuenta nueva o existente. <strong>No es dinero gratis ni garantiza una ganancia.</strong> Para utilizarlo o retirar fondos generalmente debés cumplir condiciones específicas.</p>
      <div className="article-callout"><Gift size={26} /><p>La mejor promoción no siempre es la que muestra el porcentaje más alto. Una oferta menor, con requisitos claros y alcanzables, puede ser más conveniente que un bono grande con restricciones difíciles.</p></div>

      <h2 id="como-funcionan">Cómo funcionan los bonos de casino</h2>
      <p>Las promociones suelen activarse al registrarse, ingresar un código o realizar un depósito elegible. El operador acredita el beneficio y establece reglas sobre el monto que debe apostarse, los juegos que cuentan, el plazo y las condiciones de retiro.</p>
      <p>Leé los términos antes de depositar. Si la promoción se activa automáticamente, comprobá si podés rechazarla: en algunos casos jugar con un bono puede restringir temporalmente el retiro del saldo asociado.</p>

      <div className="legal-card-grid">
        <article><Calculator size={25} /><h3>Rollover</h3><p>Indica cuántas veces debe apostarse una base determinada antes de retirar.</p></article>
        <article><Clock3 size={25} /><h3>Vencimiento</h3><p>Define cuántos días u horas tenés para completar las condiciones.</p></article>
        <article><FileText size={25} /><h3>Juegos elegibles</h3><p>No todos los juegos contribuyen de la misma manera al requisito de apuesta.</p></article>
        <article><ShieldCheck size={25} /><h3>Límites</h3><p>Puede existir una apuesta máxima, un retiro máximo o exclusiones por método de pago.</p></article>
      </div>

      <h2 id="rollover">Qué significa el requisito de apuesta</h2>
      <p>El requisito de apuesta, también llamado rollover, expresa el volumen que debés jugar antes de que el saldo promocional pueda retirarse. La base de cálculo puede ser solamente el bono o la suma del depósito y el bono; esa diferencia cambia mucho el resultado.</p>

      <h3 id="ejemplo">Ejemplo simple</h3>
      <p>Imaginá que depositás $10.000 y recibís un bono de $10.000 con un requisito de 10 veces aplicado solamente al bono. Deberías realizar apuestas acumuladas por $100.000 antes de habilitar el retiro. Si el requisito se aplicara al depósito más el bono, el volumen sería $200.000.</p>
      <div className="article-callout"><AlertTriangle size={26} /><p>Completar el volumen no significa que conservarás el saldo inicial. Cada apuesta puede producir pérdidas y el resultado final depende del azar.</p></div>

      <h2 id="comparar">Siete datos que tenés que comparar</h2>
      <ol>
        <li><strong>Quién puede participar:</strong> usuarios nuevos, existentes o segmentos específicos.</li>
        <li><strong>Depósito mínimo y máximo:</strong> cuánto exige y hasta qué monto bonifica.</li>
        <li><strong>Requisito de apuesta:</strong> multiplicador y base sobre la que se calcula.</li>
        <li><strong>Contribución de los juegos:</strong> porcentaje que aporta cada categoría.</li>
        <li><strong>Plazo:</strong> cuándo vence el saldo y qué sucede si no completás el requisito.</li>
        <li><strong>Apuesta máxima:</strong> límite permitido mientras la promoción está activa.</li>
        <li><strong>Retiro máximo:</strong> si existe un tope para las ganancias provenientes del bono.</li>
      </ol>

      <h2 id="alertas">Señales de una promoción poco transparente</h2>
      <ul>
        <li>El anuncio no incluye un enlace directo a los términos completos.</li>
        <li>Usa expresiones como “ganancia asegurada”, “sin riesgo” o “retiro garantizado”.</li>
        <li>El beneficio solo se obtiene transfiriendo a una cuenta personal.</li>
        <li>Las reglas cambian después del depósito o no muestran su fecha de vigencia.</li>
        <li>No identifica al operador ni la jurisdicción donde está habilitado.</li>
      </ul>

      <h2>Cómo usamos las promociones en este sitio</h2>
      <p>Casino Virtual Argentina puede comunicar promociones del operador destacado y también compartir novedades mediante <a href="https://www.instagram.com/casino_virtual.online/" target="_blank" rel="noopener noreferrer">@casino_virtual.online</a>. Siempre deben prevalecer los términos publicados por el operador. Si existe una diferencia, la información oficial es la válida.</p>
      <AffiliateLink className="button button-primary">Consultar promociones oficiales <ExternalLink size={17} /></AffiliateLink>

      <h2>Siguiente paso</h2>
      <p>Antes de aceptar cualquier bono, confirmá que estés utilizando uno de los <Link href="/casinos-online-legales-argentina">casinos online legales en Argentina</Link> y establecé un presupuesto que puedas perder sin afectar tus obligaciones.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
