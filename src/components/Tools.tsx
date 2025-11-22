import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    category: "Creación web e deseño asistido",
    items: [
      { name: "Bolt", url: "https://bolt.new" },
      { name: "Lovable", url: "https://lovable.dev" },
      { name: "Trae", url: "https://trae.ai" },
    ],
  },
  {
    category: "Produtividade e organización",
    items: [
      { name: "Qwen", url: "https://qwen.ai" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Deepseek", url: "https://deepseek.com" },
    ],
  },
  {
    category: "Imaxes e vídeo",
    items: [
      { name: "Flux", url: "https://flux.ai" },
      { name: "Kontext", url: "https://kontext.tech" },
    ],
  },
  {
    category: "Automatización",
    items: [
      { name: "N8n", url: "https://n8n.io" },
      { name: "Zapier", url: "https://zapier.com" },
    ],
  },
];

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
        >
          Ferramentas de IA que descubrirás
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border p-8 hover:border-foreground transition-colors group"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.category}
              </h3>
              <ul className="space-y-3">
                {tool.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="text-2xl font-bold"
                    whileHover={{
                      x: [0, -2, 2, -2, 2, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
