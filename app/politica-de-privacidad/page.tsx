import type { Metadata } from "next";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Política de privacidad";
const description = "Cómo Casino Virtual Argentina trata la información, la confirmación de edad, enlaces externos y futuras mediciones del sitio.";
const path = "/politica-de-privacidad";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <ArticleLayout
      kicker="INFORMACIÓN LEGAL"
      title={title}
      description={description}
      readingTime="4 minutos de lectura"
      showOperator={false}
      toc={[
        { href: "#datos", label: "Datos del sitio" },
        { href: "#edad", label: "Confirmación de edad" },
        { href: "#externos", label: "Sitios externos" },
        { href: "#cambios", label: "Cambios" },
      ]}
    >
      <p>Esta política describe el funcionamiento de <strong>casinovirtuargentina.com</strong>. Casino Virtual Argentina es un sitio editorial independiente: no administra cuentas de juego, no solicita datos bancarios y no procesa depósitos, apuestas ni retiros.</p>

      <h2 id="datos">Información tratada por el sitio</h2>
      <p>Actualmente no ofrecemos formularios de registro ni áreas de usuario. El servidor y la infraestructura de alojamiento pueden generar registros técnicos básicos, como dirección IP, navegador, fecha de acceso y páginas solicitadas, con fines de seguridad y funcionamiento.</p>
      <p>Si en el futuro incorporamos medición de audiencia, informaremos las herramientas utilizadas y actualizaremos esta política cuando corresponda.</p>

      <h2 id="edad">Confirmación de mayoría de edad</h2>
      <p>El sitio almacena localmente en el dispositivo una preferencia denominada <strong>cva-age-confirmed</strong>. Su única finalidad es recordar que la persona confirmó ser mayor de 18 años y evitar mostrar el aviso en cada visita. No contiene nombre, documento ni información financiera.</p>
      <p>Podés eliminar esta preferencia borrando los datos del sitio desde la configuración de tu navegador.</p>

      <h2 id="externos">Enlaces hacia WhatsApp e Instagram</h2>
      <p>El sitio contiene enlaces hacia WhatsApp e Instagram. Esos servicios aplican sus propias políticas de privacidad y pueden tratar información técnica o de la cuenta utilizada. Revisá sus documentos antes de proporcionar información personal.</p>
      <p>Al abrir WhatsApp abandonás este sitio. No compartas contraseñas, códigos de verificación ni documentación sensible mediante mensajes no solicitados.</p>

      <h2>Personas menores de edad</h2>
      <p>El contenido está dirigido exclusivamente a mayores de 18 años. No buscamos recopilar información de menores ni promocionarles juegos de azar.</p>

      <h2>Seguridad</h2>
      <p>Trabajamos para mantener el sitio actualizado y limitar la información tratada. Ningún sistema es completamente infalible; por eso recomendamos no enviar datos personales, documentos o comprobantes mediante comentarios o mensajes no solicitados.</p>

      <h2 id="cambios">Actualizaciones de esta política</h2>
      <p>Podemos modificar esta política cuando cambie el funcionamiento del sitio o la normativa aplicable. La versión vigente será la publicada en esta dirección, con su fecha de actualización.</p>
      <p><strong>Última actualización:</strong> 29 de agosto de 2026.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
