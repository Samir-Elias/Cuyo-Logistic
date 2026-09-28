import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import LeadTracker from '@/components/LeadTracker';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Política de privacidad | Logística Cuyo',
  description: 'Cómo Logística Cuyo S.A. trata los datos personales que se envían desde su sitio web, conforme a la Ley 25.326 de Protección de Datos Personales.',
  alternates: { canonical: '/privacidad' },
};

const UPDATED = 'septiembre de 2026';

export default function Privacidad() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="legal-inner">
          <div className="eyebrow">LEGAL</div>
          <h1>Política de privacidad</h1>
          <p className="legal-updated">Última actualización: {UPDATED}</p>

          <p>
            Esta política explica qué datos personales recopila el sitio web de <strong>Logística Cuyo S.A.</strong>,
            para qué los usamos y cuáles son tus derechos, de acuerdo con la Ley N.º 25.326 de Protección de los
            Datos Personales de la República Argentina y su normativa complementaria.
          </p>

          <h2>1. Responsable de los datos</h2>
          <p>
            Logística Cuyo S.A., con domicilio en {SITE.address}. Contacto: {SITE.email} · WhatsApp / teléfono {SITE.phoneDisplay}.
          </p>

          <h2>2. Qué datos recopilamos</h2>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> nombre o empresa, email, teléfono (opcional), servicio de interés
              y el mensaje que escribas. Al enviarlo se abre WhatsApp con tu consulta.
            </li>
            <li>
              <strong>Registro de contactos:</strong> cuando tocás un botón de WhatsApp, teléfono o email, o enviás el
              formulario, registramos la fecha y hora, la sección del sitio desde la que se hizo, el tipo de dispositivo
              (celular o computadora), la ciudad y el país aproximados (estimados a partir de la conexión, sin guardar la
              dirección IP), el sitio desde el que llegaste y, si existieran, los parámetros de campaña (UTM) del enlace.
            </li>
            <li>
              <strong>Datos técnicos:</strong> el sitio guarda en tu navegador, solo durante la visita
              (<em>sessionStorage</em>), la página de llegada y los parámetros de campaña, para asociarlos a tu consulta.
              No usamos cookies de publicidad ni de seguimiento.
            </li>
          </ul>

          <h2>3. Para qué los usamos</h2>
          <ul>
            <li>Responder tus consultas y preparar cotizaciones.</li>
            <li>Llevar un registro interno de los contactos recibidos desde el sitio web.</li>
            <li>Saber qué secciones del sitio generan consultas, para mejorarlo.</li>
          </ul>
          <p>No vendemos ni cedemos tus datos a terceros con fines comerciales.</p>

          <h2>4. Base legal y consentimiento</h2>
          <p>
            Tratamos tus datos con tu consentimiento, que prestás al enviar el formulario o al iniciar el contacto desde
            el sitio. Podés retirarlo en cualquier momento escribiéndonos a los medios indicados en el punto 1.
          </p>

          <h2>5. Dónde se almacenan y con quién se comparten</h2>
          <p>Para operar el sitio y registrar las consultas usamos proveedores de servicios que tratan los datos por nuestra cuenta:</p>
          <ul>
            <li><strong>Vercel</strong> (alojamiento del sitio).</li>
            <li><strong>Google</strong> (planilla de registro de consultas y tipografías del sitio).</li>
            <li><strong>WhatsApp / Meta</strong>, cuando elegís contactarnos por ese medio.</li>
            <li>Un servicio de envío de emails para avisarnos de cada consulta, si está activado.</li>
          </ul>
          <p>
            Algunos de estos proveedores pueden almacenar la información en servidores ubicados fuera de la Argentina,
            con medidas de seguridad adecuadas.
          </p>

          <h2>6. Cuánto tiempo los conservamos</h2>
          <p>
            Conservamos los datos mientras sean necesarios para gestionar tu consulta y la relación comercial, y luego
            durante los plazos que exija la normativa aplicable.
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            Podés solicitar el acceso, la rectificación, la actualización o la supresión de tus datos escribiéndonos a
            los medios indicados en el punto 1. Responderemos dentro de los plazos previstos por la Ley 25.326
            (10 días corridos para el acceso y 5 días hábiles para la rectificación, actualización o supresión).
          </p>
          <p className="legal-box">
            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma
            gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme
            lo establecido en el artículo 14, inciso 3 de la Ley N.º 25.326. La AGENCIA DE ACCESO A LA INFORMACIÓN
            PÚBLICA, en su carácter de Órgano de Control de la Ley N.º 25.326, tiene la atribución de atender las
            denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las
            normas vigentes en materia de protección de datos personales.
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger los datos contra el acceso no autorizado,
            la pérdida o la alteración.
          </p>

          <h2>9. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política. La versión vigente es siempre la publicada en esta página, con su fecha de
            última actualización.
          </p>
        </div>
      </main>
      <Footer />
      <WaFloat />
      <LeadTracker />
    </>
  );
}
