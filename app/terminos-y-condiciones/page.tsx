import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Términos y condiciones de uso";
const description = "Condiciones aplicables al uso de Casino Virtual Argentina como guía editorial independiente sobre casinos online autorizados.";
const path = "/terminos-y-condiciones";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <ArticleLayout
      kicker="INFORMACIÓN LEGAL"
      title={title}
      description={description}
      readingTime="5 minutos de lectura"
      showOperator={false}
      toc={[
        { href: "#naturaleza", label: "Naturaleza del sitio" },
        { href: "#uso", label: "Uso permitido" },
        { href: "#externos", label: "Operadores externos" },
        { href: "#afiliacion", label: "Afiliación" },
      ]}
    >
      <p>Al acceder a casinovirtualargentina.com aceptás estas condiciones. Si no estás de acuerdo, debés dejar de utilizar el sitio.</p>

      <h2 id="naturaleza">Naturaleza de Casino Virtual Argentina</h2>
      <p>Casino Virtual Argentina es una publicación informativa independiente. No es un casino, una casa de apuestas, un agente de cobro ni un procesador de pagos. No crea cuentas de juego, no recibe depósitos, no acepta apuestas y no paga premios.</p>
      <p>La información se ofrece con fines educativos y comparativos. Aunque procuramos mantenerla actualizada, los operadores pueden modificar licencias, promociones, términos y disponibilidad sin aviso a este sitio.</p>

      <h2 id="uso">Edad y uso permitido</h2>
      <p>El sitio está dirigido exclusivamente a personas mayores de 18 años. También corresponde al usuario comprobar que el acceso al juego online esté permitido en su jurisdicción y que cumple las reglas del operador elegido.</p>
      <p>No está permitido utilizar el contenido para promover juego de menores, fraude, suplantación de identidad, abuso de promociones o cualquier actividad contraria a la ley.</p>

      <h2 id="externos">Sitios y operadores externos</h2>
      <p>Cuando seguís un enlace hacia un operador o una red social, abandonás Casino Virtual Argentina. El registro, verificación, depósito, apuesta y retiro quedan sujetos a las condiciones y políticas del servicio externo.</p>
      <p>Antes de jugar, verificá que el dominio termine en .bet.ar, que corresponda a tu provincia y que la plataforma esté autorizada. Podés comenzar con nuestra <Link href="/casinos-online-legales-argentina">guía de casinos online legales</Link>.</p>

      <h2 id="afiliacion">Enlaces de afiliados</h2>
      <p>Algunos enlaces pueden permitir que Casino Virtual Argentina reciba una comisión cuando una persona realiza una acción elegible. Esto no agrega un costo al usuario. La presencia de un enlace afiliado se rige por nuestra <Link href="/metodologia">metodología editorial</Link> y no constituye una garantía de ganancias ni de resultados.</p>

      <h2>Riesgo y responsabilidad</h2>
      <p>Los juegos de azar implican riesgo de pérdida. Ningún contenido de este sitio constituye asesoramiento financiero ni una promesa de rendimiento. Cada persona es responsable de sus decisiones, de establecer límites y de buscar ayuda si pierde el control.</p>

      <h2>Propiedad intelectual</h2>
      <p>Los textos, estructura y elementos originales de Casino Virtual Argentina no pueden reproducirse de manera sustancial sin autorización. Las marcas de operadores pertenecen a sus respectivos titulares y se mencionan únicamente con fines informativos.</p>

      <h2>Cambios</h2>
      <p>Podemos actualizar estas condiciones para reflejar cambios del sitio o de la normativa. La versión vigente será la publicada en esta página.</p>
      <p><strong>Última actualización:</strong> 29 de agosto de 2026.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
