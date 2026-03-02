import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000" 
          alt="Paisagem Natural" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/20 to-neutral-900" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.4em] mb-6 text-white/70 font-medium">
            Fotógrafo de Natureza
          </span>
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter text-balance">
            Capturando a <span className="italic">Alma</span> do Selvagem
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Uma jornada por paisagens intocadas e as histórias silenciosas contadas pela terra.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-px h-24 bg-gradient-to-b from-white/50 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Role para explorar</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
