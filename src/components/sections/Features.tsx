import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutGrid, BarChart3, Smartphone, Server, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Features = () => {
  const [isAnalyticsHovered, setIsAnalyticsHovered] = useState(false);
  
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-white to-white" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>Potente y Simple</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-gradient">Todo lo que necesitas</span>
            <br />
            <span className="text-neutral-400">para crear experiencias digitales inolvidables.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Kado combina el poder de un desarrollador web con la facilidad de arrastrar y soltar. Diseña sin límites técnicos, con resultados que destacan.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Card 1: Editor Visual (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 lg:col-span-8 row-span-2"
          >
            <Card className="h-full overflow-hidden bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col group rounded-2xl">
              <CardHeader className="pb-4 pt-8 px-8">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform duration-300">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-semibold tracking-tight">Editor Visual Intuitivo</CardTitle>
                <CardDescription className="text-base md:text-lg mt-3 text-neutral-500 max-w-md">
                  Arrastra, suelta y edita en tiempo real. Lo que ves es exactamente lo que tus invitados verán.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto flex-grow relative min-h-[280px]">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Editor Interface" 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 origin-top"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Analytics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 lg:col-span-4 group/analytics"
            onMouseEnter={() => setIsAnalyticsHovered(true)}
            onMouseLeave={() => setIsAnalyticsHovered(false)}
          >
            <Card className="h-full bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 rounded-2xl overflow-hidden">
              <CardHeader className="pt-8 px-8">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white group-hover/analytics:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">Analíticas en Vivo</CardTitle>
                <CardDescription className="text-neutral-500 mt-2">
                  Visualiza en un vistazo cuántas personas abrieron, confirmaron o interactuaron con tus invitaciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex items-end justify-between gap-1.5 h-20 mt-4">
                  {[40, 65, 45, 85, 55, 95, 70, 80].map((height, i) => (
                    <motion.div 
                      key={i} 
                      className="w-full bg-neutral-200 rounded-sm overflow-hidden group-hover/analytics:bg-neutral-900 transition-colors duration-300"
                      animate={isAnalyticsHovered ? {
                        height: [`${height}%`, `${Math.min(height + 30, 100)}%`, `${height}%`],
                      } : { height: `${height}%` }}
                      transition={isAnalyticsHovered ? {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeInOut",
                      } : { duration: 0.3 }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <Card className="h-full bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 overflow-hidden relative rounded-2xl">
              <CardHeader className="relative z-10 pt-8 px-8">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white">
                  <Smartphone className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">100% Responsive</CardTitle>
                <CardDescription className="text-neutral-500 mt-2">
                  Tus invitaciones lucen perfectas en cualquier dispositivo, sin ajustes manuales.
                </CardDescription>
              </CardHeader>
              {/* Decorative devices */}
              <div className="absolute right-4 bottom-4 flex items-end gap-2 opacity-20">
                <div className="w-8 h-14 rounded-md border-2 border-neutral-400" />
                <div className="w-12 h-8 rounded-md border-2 border-neutral-400" />
                <div className="w-16 h-10 rounded-md border-2 border-neutral-400" />
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Dominios (Dark) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5"
          >
            <Card className="h-full bg-neutral-950 border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
              <CardHeader className="pt-8 px-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 text-white border border-white/10">
                  <Server className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight text-white">Dominios Personalizados</CardTitle>
                <CardDescription className="text-neutral-400 mt-2">
                  Mantén la identidad de tu marca con URLs únicas y memorables para cada evento.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                  <span className="font-mono text-sm text-neutral-300 truncate">tumarca.kado.com/boda</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 5: Estilos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7"
          >
            <Card className="h-full bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col md:flex-row overflow-hidden rounded-2xl">
              <div className="flex-1 pt-8 pb-6 md:pb-8 px-8 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white">
                  <Palette className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">Estilos Ilimitados</CardTitle>
                <CardDescription className="mt-3 text-neutral-500">
                  Explora tipografías premium, paletas personalizadas y animaciones suaves que reflejan la esencia de cada evento.
                </CardDescription>
              </div>
              <div className="flex-1 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden flex items-center justify-center p-6 md:p-8 min-h-[140px]">
                <div className="grid grid-cols-3 gap-3 w-full max-w-[200px]">
                  <div className="aspect-square rounded-xl bg-neutral-900 shadow-lg" />
                  <div className="aspect-square rounded-xl bg-neutral-300" />
                  <div className="aspect-square rounded-xl bg-neutral-500" />
                  <div className="aspect-square rounded-xl bg-neutral-100 border border-neutral-200" />
                  <div className="aspect-square rounded-xl bg-neutral-700" />
                  <div className="aspect-square rounded-xl bg-neutral-400" />
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
