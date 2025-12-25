import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Context */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-900">
                Empieza a crear <br />
                <span className="text-neutral-400">el futuro de los eventos con Kado.</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                Estamos abriendo el acceso de forma progresiva. Solicita tu acceso y sé parte de los profesionales que están redefiniendo cómo se invitan los momentos más importantes.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Acceso Anticipado</h4>
                  <p className="text-sm text-neutral-500 mt-1">Prioridad en el lanzamiento oficial y tarifas especiales para fundadores.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Soporte Directo</h4>
                  <p className="text-sm text-neutral-500 mt-1">Canal directo con el equipo de desarrollo para feedback.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.08)] border border-neutral-100 relative"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 h-full min-h-[400px]">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-900">¡Solicitud Recibida!</h3>
                  <p className="text-neutral-500 max-w-xs mx-auto">
                    Gracias por tu interés. Revisa tu correo, te contactaremos muy pronto.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full mt-4">
                  Volver al formulario
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Nombre</Label>
                      <Input id="firstName" placeholder="Juan" required className="h-12 bg-neutral-50 border-transparent focus:bg-white focus:border-neutral-200 transition-all rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Apellido</Label>
                      <Input id="lastName" placeholder="Pérez" required className="h-12 bg-neutral-50 border-transparent focus:bg-white focus:border-neutral-200 transition-all rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Email Profesional</Label>
                    <Input id="email" type="email" placeholder="juan@empresa.com" required className="h-12 bg-neutral-50 border-transparent focus:bg-white focus:border-neutral-200 transition-all rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Perfil</Label>
                    <div className="relative">
                      <select 
                        id="role" 
                        defaultValue=""
                        className="flex h-12 w-full items-center justify-between rounded-xl border border-transparent bg-neutral-50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                      >
                        <option value="" disabled>Selecciona tu perfil...</option>
                        <option value="photographer">Fotógrafo</option>
                        <option value="planner">Event Planner</option>
                        <option value="agency">Agencia</option>
                        <option value="other">Otro</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Mensaje (Opcional)</Label>
                    <Textarea id="message" placeholder="¿Qué tipo de eventos organizas?" className="min-h-[100px] bg-neutral-50 border-transparent focus:bg-white focus:border-neutral-200 transition-all rounded-xl resize-none" />
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 rounded-full text-base font-medium bg-neutral-900 hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Procesando...
                    </>
                  ) : (
                    <>
                      Solicitar Acceso
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-center text-neutral-400 mt-4">
                  Sin compromiso. No se requiere tarjeta de crédito.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
