import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    category: "Creación web e deseño asistido",
    items: ["Bolt", "Lovable", "Trae"],
  },
  {
    category: "Produtividade e organización",
    items: ["Qwen", "Claude", "Deepseek"],
  },
  {
    category: "Imaxes e vídeo",
    items: ["Flux", "Kontext"],
  },
  {
    category: "Automatización",
    items: ["N8n", "Zapier"],
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
          Ferramentas
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
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
                  <li key={itemIndex} className="text-2xl font-bold">
                    {item}
                  </li>
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
