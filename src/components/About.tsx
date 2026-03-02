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
                alt="Photographer" 
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-6 block font-bold">The Vision</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight">
              Observing the <br />
              <span className="italic">Unseen Rhythm</span>
            </h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
              <p>
                I believe that nature doesn't just exist; it speaks. My work is about listening to that voice and translating it into visual poetry.
              </p>
              <p>
                With over a decade of exploring the world's most remote corners, I seek to capture the fleeting moments of light and shadow that define our existence on this planet.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-2xl font-serif mb-1">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Years Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">45</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">18</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
