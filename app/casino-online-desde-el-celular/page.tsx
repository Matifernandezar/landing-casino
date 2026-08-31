import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ExternalLink, Fingerprint, LockKeyhole, MapPin, Smartphone, Wifi } from "lucide-react";
import { WhatsAppLink } from "../whatsapp-link";
import { ArticleLayout, ArticleSchema } from "../article-layout";

const title = "Casino online desde el celular: registro y seguridad";
const description = "Guía para acceder a un casino virtual desde el celular, verificar el dominio, crear una cuenta, depositar y configurar límites de forma segura.";
const path = "/casino-online-desde-el-celular";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function MobileCasinoPage() {
  return (
    <ArticleLayout
      kicker="GUÍA MÓVIL"
      title={title}
      description={description}
      readingTime="7 minutos de lectura"
      toc={[
        { href: "#antes", label: "Antes de entrar" },
        { href: "#registro", label: "Registro paso a paso" },
        { href: "#pagos", label: "Depósitos y retiros" },
        { href: "#seguridad", label: "Seguridad del celular" },
        { href: "#app", label: "App o navegador" },
      ]}
    >
      <p>Hoy un casino online puede utilizarse completamente desde un teléfono: registro, validación de identidad, juegos, depósitos, retiros y configuración de límites. La comodidad también exige más atención, porque un enlace falso o una transferencia a un tercero puede pasar desapercibida en una pantalla pequeña.</p>
      <div className="article-callout"><Smartphone size={26} /><p>Guardá el dominio oficial como favorito después de verificarlo. Evitá ingresar desde mensajes reenviados, anuncios dudosos o enlaces acortados cuyo destino no podés comprobar.</p></div>

      <h2 id="antes">Qué revisar antes de acceder</h2>
      <div className="check-table">
        <div><strong>Dirección web</strong><span>Debe terminar en .bet.ar y corresponder al operador y a tu jurisdicción.</span></div>
        <div><strong>Conexión</strong><span>Usá una red privada y segura. Evitá registrar datos o realizar pagos desde Wi-Fi público.</span></div>
        <div><strong>Ubicación</strong><span>Permití la geolocalización únicamente al sitio oficial cuando sea necesaria para verificar la provincia.</span></div>
        <div><strong>Identidad</strong><span>Prepará documentación propia y no abras una cuenta a nombre de otra persona.</span></div>
      </div>

      <h2 id="registro">Registro paso a paso desde el celular</h2>
      <ol>
        <li>Ingresá al operador desde un enlace comprobado.</li>
        <li>Confirmá que el dominio y la jurisdicción sean correctos.</li>
        <li>Seleccioná la opción para crear una cuenta.</li>
        <li>Completá datos reales y una contraseña única.</li>
        <li>Realizá la verificación de identidad solicitada.</li>
        <li>Leé los términos de cualquier promoción antes de aceptarla.</li>
        <li>Configurá un límite de depósito antes de realizar el primero.</li>
      </ol>

      <div className="legal-card-grid">
        <article><MapPin size={25} /><h3>Geolocalización</h3><p>Confirma que la plataforma está habilitada para operar donde se encuentra el jugador.</p></article>
        <article><Fingerprint size={25} /><h3>Identidad</h3><p>Ayuda a impedir cuentas de menores, duplicadas o creadas con datos ajenos.</p></article>
        <article><LockKeyhole size={25} /><h3>Contraseña</h3><p>Utilizá una combinación exclusiva y activá el segundo factor si está disponible.</p></article>
        <article><BadgeCheck size={25} /><h3>Cuenta propia</h3><p>El titular de la cuenta de juego y del medio de pago debería ser la misma persona.</p></article>
      </div>

      <h2 id="pagos">Depósitos y retiros sin intermediarios</h2>
      <p>Realizá todas las operaciones desde la sección de caja del operador. No envíes dinero a un supuesto cajero por WhatsApp, Instagram o Telegram. Un canal social puede informar novedades, pero nunca debería reemplazar la plataforma de pagos regulada.</p>
      <p>Antes de depositar, revisá montos mínimos, tiempos estimados, métodos habilitados y requisitos de verificación para retirar. Conservá comprobantes y utilizá medios de pago a tu nombre.</p>

      <h2 id="seguridad">Protegé el celular y la cuenta</h2>
      <ul>
        <li>Mantené actualizado el sistema operativo y el navegador.</li>
        <li>Activá bloqueo de pantalla y autenticación biométrica.</li>
        <li>No guardes la contraseña en notas, chats o capturas de pantalla.</li>
        <li>No compartas códigos recibidos por SMS o correo electrónico.</li>
        <li>Cerrá la sesión si el dispositivo es compartido.</li>
        <li>Revisá periódicamente movimientos y límites configurados.</li>
      </ul>

      <h2 id="app">¿Conviene una app o el navegador?</h2>
      <p>Ambas opciones pueden ser válidas. El navegador evita instalaciones y permite comprobar fácilmente la dirección. Una aplicación oficial puede ofrecer una experiencia más integrada, pero debe descargarse desde el sitio del operador o la tienda oficial indicada por él. Nunca instales archivos enviados por un desconocido.</p>
      <div className="article-callout"><Wifi size={26} /><p>Una conexión rápida mejora la experiencia, pero no cambia las probabilidades de los juegos. La estabilidad técnica no debe confundirse con una mayor posibilidad de ganar.</p></div>

      <h2>Consultá desde el celular</h2>
      <p>Si necesitás orientación antes de continuar, podés abrir nuestro canal de WhatsApp. Verificá igualmente la disponibilidad, el dominio y las condiciones para tu ubicación.</p>
      <WhatsAppLink className="button button-primary">Consultar desde el celular <ExternalLink size={17} /></WhatsAppLink>

      <h2>Seguimos ayudándote</h2>
      <p>Consultá nuestra guía de <Link href="/casinos-online-legales-argentina">casinos online legales</Link> y aprendé a interpretar los <Link href="/bonos-casino-online-argentina">bonos de casino en Argentina</Link>.</p>
      <ArticleSchema headline={title} description={description} path={path} />
    </ArticleLayout>
  );
}
