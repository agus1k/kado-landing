import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <article className="prose prose-neutral prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-neutral-500 text-lg mb-12">
              Última actualización: 5 de enero de 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Al acceder y utilizar la plataforma Kado ("el Servicio"), usted acepta estar legalmente vinculado 
                por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, 
                le rogamos que no utilice nuestro Servicio.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Kado se reserva el derecho de modificar estos términos en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en esta página. 
                Su uso continuado del Servicio después de cualquier modificación constituye su aceptación 
                de los nuevos términos.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Kado es una plataforma de creación de invitaciones digitales personalizadas diseñada 
                para fotógrafos, planners de eventos y profesionales del sector. Nuestro Servicio permite:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Crear y personalizar invitaciones web interactivas</li>
                <li>Gestionar listas de invitados y confirmaciones de asistencia</li>
                <li>Compartir invitaciones a través de enlaces únicos</li>
                <li>Acceder a plantillas y herramientas de diseño profesional</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. Registro y Cuenta de Usuario
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Para utilizar ciertas funcionalidades del Servicio, es necesario crear una cuenta. 
                Usted se compromete a:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Proporcionar información veraz, precisa y completa durante el registro</li>
                <li>Mantener actualizada su información de cuenta</li>
                <li>Mantener la confidencialidad de su contraseña</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Ser responsable de todas las actividades que ocurran bajo su cuenta</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. Propiedad Intelectual
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Todo el contenido disponible en el Servicio, incluyendo pero no limitado a textos, 
                gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, 
                es propiedad de Kado o de sus proveedores de contenido y está protegido por las leyes 
                de propiedad intelectual.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                El contenido que usted cree utilizando nuestras herramientas permanece como su propiedad. 
                Sin embargo, al subir contenido a nuestra plataforma, nos otorga una licencia no exclusiva 
                para almacenar, procesar y mostrar dicho contenido en el contexto del Servicio.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Uso Aceptable
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Usted se compromete a no utilizar el Servicio para:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Cualquier propósito ilegal o no autorizado</li>
                <li>Violar cualquier ley aplicable</li>
                <li>Infringir los derechos de propiedad intelectual de terceros</li>
                <li>Transmitir material que sea difamatorio, obsceno o amenazante</li>
                <li>Interferir con el funcionamiento del Servicio o los servidores</li>
                <li>Intentar acceder a áreas restringidas del sistema sin autorización</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Planes y Pagos
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Kado ofrece diferentes planes de suscripción. Los precios y características de cada plan 
                están disponibles en nuestra página de precios. Nos reservamos el derecho de modificar 
                los precios previo aviso con 30 días de anticipación.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Todas las ventas son finales. No ofrecemos reembolsos excepto en circunstancias excepcionales 
                y a nuestra discreción. Si cancela su suscripción, continuará teniendo acceso al Servicio 
                hasta el final del período de facturación actual.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Limitación de Responsabilidad
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                El Servicio se proporciona "tal cual" y "según disponibilidad". Kado no garantiza que 
                el Servicio sea ininterrumpido, seguro o libre de errores. En la máxima medida permitida 
                por la ley aplicable, Kado no será responsable de:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Daños indirectos, incidentales, especiales o consecuentes</li>
                <li>Pérdida de datos o beneficios</li>
                <li>Interrupciones del servicio</li>
                <li>Errores o inexactitudes en el contenido</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. Terminación
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Kado puede suspender o terminar su acceso al Servicio en cualquier momento, con o sin causa, 
                con o sin aviso previo. Tras la terminación, su derecho a usar el Servicio cesará inmediatamente. 
                Usted puede cancelar su cuenta en cualquier momento desde la configuración de su perfil.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. Ley Aplicable
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Estos Términos se regirán e interpretarán de acuerdo con las leyes vigentes. 
                Cualquier disputa que surja en relación con estos Términos será sometida a la 
                jurisdicción exclusiva de los tribunales competentes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Contacto
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:
              </p>
              <p className="text-neutral-900 font-medium mt-4">
                <a 
                  href="mailto:contacto@aivange.com" 
                  className="text-neutral-900 hover:text-neutral-600 transition-colors underline underline-offset-4"
                >
                  contacto@aivange.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};
