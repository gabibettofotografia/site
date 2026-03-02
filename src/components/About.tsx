import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-8 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900/50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=800" 
                alt="Fotógrafa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-neutral-950/20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6 block font-bold">A Visão</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
              Observando o <br />
              <span className="italic">Ritmo Invisível</span>
            </h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
              <p>
                Acredito que a natureza não apenas existe; ela fala. Meu trabalho é ouvir essa voz e traduzi-la em poesia visual.
              </p>
              <p>
                Com mais de uma década explorando os cantos mais remotos do mundo, busco capturar os momentos fugazes de luz e sombra que definem nossa existência neste planeta.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-2xl font-serif mb-1">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Anos Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">45</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Países</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">18</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Prêmios</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
