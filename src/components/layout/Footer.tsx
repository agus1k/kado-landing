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
          
          {/* Left Column: Brand */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Kado</h3>
              <p className="text-neutral-400 text-sm max-w-xs">
                La herramienta definitiva para crear invitaciones digitales profesionales.
              </p>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-200">Navegación</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><a href="#features" className="hover:text-white transition-colors">Producto</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Solución</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-neutral-200">Legal</h4>
              <ul className="space-y-3 text-neutral-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <span>Copyright © 2025 Kado Inc.</span>
          
          <a 
            href="https://aivange.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Powered by <span className="font-medium">Aivange</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
