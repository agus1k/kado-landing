import { Instagram, Twitter, Linkedin, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Large Watermark Logo Background */}
      <div className="absolute bottom-[-2vw] left-0 right-0 flex justify-center pointer-events-none select-none opacity-20 z-0">
        <h1 className="text-[22vw] font-bold leading-none tracking-tighter text-neutral-800/55">
          KADO
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Left Column: Brand & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-center gap-2">
              </div>
            </div>

            <div className="flex gap-6 mt-12 lg:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-200">Soluciones</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Para Fotógrafos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Para Planners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Agencias</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Freelancers</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-200">Recursos</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ayuda</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-200">Legal</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              SOC 2 Certified
            </span>
            <span>Copyright © 2025 Kado Inc.</span>
          </div>
          
          <Button variant="ghost" size="sm" className="h-8 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full gap-2">
            <Globe className="w-3 h-3" />
            Español
          </Button>
        </div>
      </div>
    </footer>
  );
};
