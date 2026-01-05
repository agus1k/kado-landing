import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
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
              Política de Privacidad
            </h1>
            <p className="text-neutral-500 text-lg mb-12">
              Última actualización: 5 de enero de 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                1. Introducción
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                En Kado ("nosotros", "nuestro" o "la Plataforma"), nos comprometemos a proteger 
                su privacidad y a tratar sus datos personales con responsabilidad y transparencia. 
                Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos 
                su información cuando utiliza nuestra plataforma de invitaciones digitales.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política. 
                Le recomendamos leerla detenidamente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                2. Información que Recopilamos
              </h2>
              
              <h3 className="text-xl font-medium text-neutral-800 mb-3 mt-6">
                2.1 Información que usted proporciona
              </h3>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Datos de registro:</strong> nombre, dirección de correo electrónico, contraseña</li>
                <li><strong>Información de perfil:</strong> foto de perfil, nombre de empresa, información de contacto</li>
                <li><strong>Contenido de invitaciones:</strong> textos, imágenes, fechas de eventos, listas de invitados</li>
                <li><strong>Información de pago:</strong> procesada de forma segura por nuestros proveedores de pago</li>
              </ul>

              <h3 className="text-xl font-medium text-neutral-800 mb-3 mt-6">
                2.2 Información recopilada automáticamente
              </h3>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Datos de uso:</strong> páginas visitadas, funcionalidades utilizadas, tiempo de sesión</li>
                <li><strong>Información del dispositivo:</strong> tipo de navegador, sistema operativo, dirección IP</li>
                <li><strong>Cookies y tecnologías similares:</strong> para mejorar la experiencia del usuario</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                3. Cómo Utilizamos su Información
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar notificaciones relacionadas</li>
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Comunicarnos con usted sobre actualizaciones, ofertas y novedades</li>
                <li>Analizar tendencias de uso para mejorar la plataforma</li>
                <li>Detectar, prevenir y abordar problemas técnicos y de seguridad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                4. Compartición de Información
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir 
                su información únicamente en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar la plataforma 
                (procesamiento de pagos, alojamiento, análisis)</li>
                <li><strong>Requisitos legales:</strong> cuando sea requerido por ley o para proteger 
                nuestros derechos legales</li>
                <li><strong>Con su consentimiento:</strong> cuando usted nos autorice explícitamente</li>
                <li><strong>Transferencia de negocio:</strong> en caso de fusión, adquisición o venta de activos</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                5. Seguridad de los Datos
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información, 
                incluyendo:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Encriptación de datos en tránsito (HTTPS/TLS)</li>
                <li>Almacenamiento seguro con encriptación en reposo</li>
                <li>Control de acceso basado en roles</li>
                <li>Auditorías de seguridad regulares</li>
                <li>Copias de seguridad automáticas</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed">
                Aunque nos esforzamos por proteger su información, ningún método de transmisión 
                por Internet es 100% seguro. Le recomendamos utilizar contraseñas seguras y mantener 
                la confidencialidad de sus credenciales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                6. Retención de Datos
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Conservamos su información personal mientras su cuenta esté activa o según sea 
                necesario para proporcionarle servicios. Tras la eliminación de su cuenta, 
                conservaremos ciertos datos durante el período legalmente requerido o para 
                fines comerciales legítimos (como cumplimiento de obligaciones fiscales o resolución de disputas).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                7. Sus Derechos
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Dependiendo de su ubicación, usted puede tener los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li><strong>Acceso:</strong> solicitar una copia de sus datos personales</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
                <li><strong>Eliminación:</strong> solicitar la eliminación de sus datos personales</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado</li>
                <li><strong>Oposición:</strong> oponerse al procesamiento de sus datos en ciertas circunstancias</li>
                <li><strong>Restricción:</strong> solicitar la limitación del procesamiento de sus datos</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed">
                Para ejercer cualquiera de estos derechos, contáctenos a través de los medios 
                indicados al final de esta política.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 space-y-2 mb-4">
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Mantener su sesión iniciada</li>
                <li>Analizar el uso de nuestra plataforma</li>
                <li>Mejorar el rendimiento del sitio</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
                la funcionalidad de ciertos servicios.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                9. Menores de Edad
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos 
                intencionalmente información de menores. Si cree que hemos recopilado información 
                de un menor, contáctenos inmediatamente para que podamos eliminarla.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                10. Cambios en esta Política
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos 
                sobre cambios significativos a través de un aviso en nuestra plataforma o por 
                correo electrónico. La fecha de "última actualización" en la parte superior 
                indica cuándo se realizaron las últimas modificaciones.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                11. Contacto
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Si tiene preguntas, comentarios o solicitudes relacionadas con esta Política 
                de Privacidad o el tratamiento de sus datos personales, puede contactarnos en:
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
