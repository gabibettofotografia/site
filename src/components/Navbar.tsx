import { motion } from "motion/react";
import { Camera } from "lucide-react";

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
        <span className="font-serif italic text-xl tracking-wider">Natura</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.2em] font-medium text-white/60">
        <a href="#gallery" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <button className="px-6 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
        Book Session
      </button>
    </motion.nav>
  );
}
