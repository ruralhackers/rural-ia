import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const objectives = [
  "Aprender ferramentas IA actuais para crear, organizarse e automatizar",
  "Crear unha web ou prototipo funcional en poucas horas",
  "Mellorar produtividade persoal e profesional con IA",
  "Xerar imaxes e vídeos creativos para proxectos propios",
  "Construír automatizacións sen código",
  "Desenvolver habilidades brandas: comunicación, colaboración, resolución creativa",
  "Conectar e convivir en Anceu Coliving",
  "Descubrir o rural como espazo tecnolóxico e creativo",
];

const Objectives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
        >
          Obxectivos
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 items-start group"
            >
              <span className="text-4xl font-bold text-muted-foreground/30 group-hover:text-foreground transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-lg pt-2">{objective}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
