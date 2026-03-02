import { motion } from "motion/react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    title: "Silêncio da Floresta",
    category: "Floresta"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    title: "Picos das Montanhas",
    category: "Montanhas"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    title: "Lago de Cristal",
    category: "Água"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
    title: "Vale Dourado",
    category: "Planícies"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    title: "Árvore Solitária",
    category: "Minimalista"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1433086566608-e9373f6672da?auto=format&fit=crop&q=80&w=800",
    title: "Quedas de Névoa",
    category: "Água"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Trabalhos Selecionados</h2>
            <p className="text-white/50 font-light leading-relaxed">
              Uma coleção curada de momentos onde o tempo parou. Cada fotografia é um testemunho da beleza bruta do nosso planeta.
            </p>
          </div>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/40">
            <span className="text-white border-b border-white pb-1 cursor-pointer">Todos</span>
            <span className="hover:text-white transition-colors cursor-pointer">Floresta</span>
            <span className="hover:text-white transition-colors cursor-pointer">Montanhas</span>
            <span className="hover:text-white transition-colors cursor-pointer">Água</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl mb-1">{photo.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{photo.category}</p>
                </div>
                <span className="text-[10px] font-mono text-white/30">0{photo.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
