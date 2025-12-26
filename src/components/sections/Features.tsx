import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutGrid, BarChart3, Smartphone, Server, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import editorVideo from "@/assets/video.webm";

export const Features = () => {
  const [isAnalyticsHovered, setIsAnalyticsHovered] = useState(false);
  const [isResponsiveHovered, setIsResponsiveHovered] = useState(false);
  const [isStylesHovered, setIsStylesHovered] = useState(false);
  const [isDomainsHovered, setIsDomainsHovered] = useState(false);

  const styleColors = [
    { base: "bg-neutral-900", hover: "#171717" },
    { base: "bg-neutral-300", hover: "#3b82f6" },
    { base: "bg-neutral-500", hover: "#8b5cf6" },
    { base: "bg-neutral-100", hover: "#f43f5e" },
    { base: "bg-neutral-700", hover: "#10b981" },
    { base: "bg-neutral-400", hover: "#f59e0b" },
  ];
  
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
              <CardContent className="p-6 md:p-8 mt-auto flex-grow relative">
                {/* Video Container with Premium SaaS styling */}
                <div className="relative w-full h-full min-h-[220px] md:min-h-[260px] rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl ring-1 ring-white/10">
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
                  {/* Browser-like top bar for premium feel */}
                  <div className="absolute top-0 left-0 right-0 h-7 bg-neutral-900/90 backdrop-blur-sm flex items-center px-3 gap-1.5 z-20 rounded-t-2xl">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <div className="flex-1 mx-3">
                      <div className="h-3.5 w-28 bg-neutral-800 rounded-md" />
                    </div>
                  </div>
                  {/* Video element - centered crop, fully rounded */}
                  <video 
                    src={editorVideo}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    style={{ top: '1.75rem' }} // pt-7 equivalente
                  />
                  {/* Bottom fade for seamless integration */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none rounded-b-2xl" />
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
            className="md:col-span-5 lg:col-span-4 group/responsive"
            onMouseEnter={() => setIsResponsiveHovered(true)}
            onMouseLeave={() => setIsResponsiveHovered(false)}
          >
            <Card className="h-full bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 overflow-hidden rounded-2xl flex flex-col">
              <CardHeader className="pt-8 px-8 pb-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white group-hover/responsive:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">100% Responsive</CardTitle>
                <CardDescription className="text-neutral-500 mt-2">
                  Tus invitaciones lucen perfectas en cualquier dispositivo, sin ajustes manuales.
                </CardDescription>
              </CardHeader>
              {/* Decorative devices */}
              <CardContent className="px-8 pb-8 mt-auto">
                <div className="flex items-end justify-end gap-3">
                  {/* Mobile */}
                  <motion.div 
                    className="w-8 h-14 rounded-md border-2 border-neutral-300 bg-white relative overflow-hidden"
                    animate={isResponsiveHovered ? { 
                      opacity: [0.3, 1, 1],
                      y: [10, 0, 0],
                      borderColor: ["#d4d4d4", "#171717", "#171717"]
                    } : { opacity: 0.3, y: 0, borderColor: "#d4d4d4" }}
                    transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="absolute inset-1 rounded-sm bg-neutral-900"
                      animate={isResponsiveHovered ? { scaleY: [0, 1], opacity: [0, 0.15] } : { scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                      style={{ originY: 1 }}
                    />
                  </motion.div>
                  {/* Tablet */}
                  <motion.div 
                    className="w-12 h-9 rounded-md border-2 border-neutral-300 bg-white relative overflow-hidden"
                    animate={isResponsiveHovered ? { 
                      opacity: [0.3, 1, 1],
                      y: [10, 0, 0],
                      borderColor: ["#d4d4d4", "#171717", "#171717"]
                    } : { opacity: 0.3, y: 0, borderColor: "#d4d4d4" }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="absolute inset-1 rounded-sm bg-neutral-900"
                      animate={isResponsiveHovered ? { scaleY: [0, 1], opacity: [0, 0.15] } : { scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
                      style={{ originY: 1 }}
                    />
                  </motion.div>
                  {/* Desktop */}
                  <motion.div 
                    className="w-16 h-10 rounded-md border-2 border-neutral-300 bg-white relative overflow-hidden"
                    animate={isResponsiveHovered ? { 
                      opacity: [0.3, 1, 1],
                      y: [10, 0, 0],
                      borderColor: ["#d4d4d4", "#171717", "#171717"]
                    } : { opacity: 0.3, y: 0, borderColor: "#d4d4d4" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <motion.div 
                      className="absolute inset-1 rounded-sm bg-neutral-900"
                      animate={isResponsiveHovered ? { scaleY: [0, 1], opacity: [0, 0.15] } : { scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                      style={{ originY: 1 }}
                    />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Dominios (Dark) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 group/domains"
            onMouseEnter={() => setIsDomainsHovered(true)}
            onMouseLeave={() => setIsDomainsHovered(false)}
          >
            <Card className="h-full bg-neutral-950 border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
              <CardHeader className="pt-8 px-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 text-white border border-white/10 group-hover/domains:scale-110 group-hover/domains:bg-white/20 transition-all duration-300">
                  <Server className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight text-white">Dominios Personalizados</CardTitle>
                <CardDescription className="text-neutral-400 mt-2">
                  Mantén la identidad de tu marca con URLs únicas y memorables para cada evento.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <motion.div 
                  className="bg-white/5 border rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm"
                  animate={isDomainsHovered ? {
                    borderColor: ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.4)", "rgba(255,255,255,0.1)"],
                  } : { borderColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 2, repeat: isDomainsHovered ? Infinity : 0, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0"
                    animate={isDomainsHovered ? {
                      scale: [1, 1.4, 1],
                      boxShadow: [
                        "0 0 10px rgba(16,185,129,0.5)",
                        "0 0 20px rgba(16,185,129,0.8)",
                        "0 0 10px rgba(16,185,129,0.5)"
                      ]
                    } : { scale: 1, boxShadow: "0 0 10px rgba(16,185,129,0.5)" }}
                    transition={{ duration: 1.2, repeat: isDomainsHovered ? Infinity : 0, ease: "easeInOut" }}
                  />
                  <span className="font-mono text-sm text-neutral-300 truncate">
                    <motion.span
                      className="inline-block"
                      animate={isDomainsHovered ? { color: "#34d399" } : { color: "#d4d4d4" }}
                      transition={{ duration: 0.3 }}
                    >
                      tumarca
                    </motion.span>
                    <span className="text-neutral-500">.kado.com/</span>
                    <motion.span
                      className="inline-block"
                      animate={isDomainsHovered ? { color: "#34d399" } : { color: "#d4d4d4" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      boda
                    </motion.span>
                  </span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 5: Estilos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 group/styles"
            onMouseEnter={() => setIsStylesHovered(true)}
            onMouseLeave={() => setIsStylesHovered(false)}
          >
            <Card className="h-full bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300 transition-all duration-500 flex flex-col md:flex-row overflow-hidden rounded-2xl">
              <div className="flex-1 pt-8 pb-6 md:pb-8 px-8 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 text-white group-hover/styles:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">Estilos Ilimitados</CardTitle>
                <CardDescription className="mt-3 text-neutral-500">
                  Explora tipografías premium, paletas personalizadas y animaciones suaves que reflejan la esencia de cada evento.
                </CardDescription>
              </div>
              <div className="flex-1 bg-gradient-to-br from-neutral-50 to-neutral-100 relative overflow-hidden flex items-center justify-center p-6 md:p-8 min-h-[140px]">
                <div className="grid grid-cols-3 gap-3 w-full max-w-[200px]">
                  {styleColors.map((color, i) => (
                    <motion.div 
                      key={i}
                      className={`aspect-square rounded-xl ${color.base} ${i === 0 ? 'shadow-lg' : ''} ${i === 3 ? 'border border-neutral-200' : ''}`}
                      animate={isStylesHovered ? {
                        backgroundColor: color.hover,
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      } : {
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: isStylesHovered ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
