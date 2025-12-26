import { Zap, Layers, MousePointer2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import timelineVideo from "@/assets/timeline.mp4";

export const Demo = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocidad Supersónica",
      description: "De la idea al envío en minutos. Sin desarrolladores, sin demoras.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Calidad de Estudio",
      description: "Cada invitación se adapta perfectamente a cualquier pantalla, con acabados de nivel estudio.",
    },
    {
      icon: <MousePointer2 className="w-6 h-6" />,
      title: "Control Absoluto",
      description: "Gestiona confirmaciones, actualiza contenido y visualiza analíticas desde un panel unificado.",
    }
  ];

  return (
    <section id="demo" className="py-32 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Column: Content & Benefits */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white"
              >
                <Sparkles className="w-3 h-3" />
                Workflow Optimizado
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                Potencia tu negocio <br />
                <span className="text-neutral-500">
                  sin depender de terceros.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl"
              >
                Kado elimina la fricción entre tu creatividad y el resultado final. Diseña, personaliza y entrega experiencias digitales memorables que tus clientes amarán.
              </motion.p>
            </div>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            
          </div>

          {/* Right Column: Visual Support */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            {/* Video Content - sin marco, recortado */}
            <div className="relative aspect-[4/3] bg-black rounded-2xl">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <video
                  src={timelineVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute left-1/2 top-0 w-[120%] h-full object-cover object-left rounded-2xl"
                  style={{ transform: 'translateX(-55%)', background: '#000' }}
                />
                {/* Overlay Gradient para integración natural */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none rounded-2xl" />
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neutral-800/50 to-neutral-700/30 rounded-[2rem] blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
