import { motion } from "motion/react";
import { Camera, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-sm border-b border-white/5"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
          <Camera className="w-5 h-5 text-white" />
        </div>
        <span className="font-serif italic text-xl tracking-wider whitespace-nowrap">Gabriela Betto</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-medium text-white/60">
        <a href="#gallery" className="hover:text-white transition-colors">Portfólio</a>
        <a href="#about" className="hover:text-white transition-colors">Sobre</a>
        <a href="#contact" className="hover:text-white transition-colors">Contato</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/5519991720473" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-all duration-300"
        >
          <MessageCircle className="w-3 h-3" />
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
}
