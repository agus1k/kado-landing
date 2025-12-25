import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-neutral-50/50 to-transparent rounded-[100%] blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8"
        >
          <Sparkles className="w-3 h-3" />
          <span>La nueva era de las invitaciones digitales</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto"
        >
          Crea invitaciones web impresionantes <br className="hidden md:block" />
          <span className="text-neutral-400">sin escribir una sola línea de código.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kado es la herramienta definitiva para fotógrafos, planners y profesionales del mundo de los eventos. Diseña, personaliza y comparte invitaciones únicas en minutos, sin depender de un programador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#contact">
            <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
              Empezar ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <a href="#demo">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-white/50 backdrop-blur-sm">
              Ver demo
            </Button>
          </a>
        </motion.div>

        {/* Hero Video Section - Grande y Demostrativo */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900 aspect-video group cursor-pointer ring-1 ring-neutral-900/5">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl hover:bg-white/20 transition-colors">
                <Play className="w-10 h-10 text-white fill-white ml-2" />
              </div>
            </div>

            {/* Video Thumbnail / Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" 
              alt="Kado Editor Demo" 
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* UI Browser Bar Simulation */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-md flex items-center px-4 gap-2 z-20 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto w-1/3 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white/50 font-mono">
                kado.app/editor
              </div>
            </div>
          </div>
          
          {/* Decorative Glow behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200 to-neutral-200 rounded-[2rem] blur-3xl -z-10 opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};
