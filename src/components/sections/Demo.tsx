import { Zap, Layers, MousePointer2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Demo = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Velocidad Supersónica",
      description: "De concepto a publicación en minutos. Sin tiempos de desarrollo tradicionales.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Calidad de Estudio",
      description: "Acabados profesionales automáticos. Perfecto en cualquier pantalla.",
    },
    {
      icon: <MousePointer2 className="w-6 h-6" />,
      title: "Control Absoluto",
      description: "Gestiona RSVPs, cambios y analíticas desde un único panel.",
    }
  ];

  return (
    <section id="demo" className="py-32 bg-neutral-950 text-white overflow-hidden relative">
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
                  sin límites técnicos.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl"
              >
                Kado elimina la fricción entre tu creatividad y el resultado final. Entrega más rápido y sorprende a tus clientes.
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

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
            >
               <Button className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-full px-8 h-12 text-base font-medium transition-all hover:scale-105 shadow-lg shadow-white/10">
                 Ver todas las características
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Support */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            {/* Main Interface Container */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl ring-1 ring-white/5 transition-transform duration-500 hover:scale-[1.02]">
              {/* Window Controls */}
              <div className="h-10 bg-neutral-900 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] text-neutral-500 font-mono border border-white/5">
                  kado.app/dashboard
                </div>
              </div>

              {/* Image Content */}
              <div className="relative aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                  alt="Kado Dashboard Interface" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Floating Stats Panel */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-neutral-900/90 backdrop-blur-xl p-5 rounded-xl border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-neutral-400">Rendimiento en tiempo real</span>
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50" />
                      Activo
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-14">
                    {[30, 45, 35, 60, 50, 75, 65, 85, 70, 90, 60, 80].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-neutral-700 rounded-sm hover:bg-white transition-colors duration-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute top-6 right-6 bg-white text-neutral-900 px-4 py-2.5 rounded-xl shadow-xl font-medium text-sm flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Invitación Publicada
                </motion.div>
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
