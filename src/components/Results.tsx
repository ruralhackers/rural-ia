import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  "Web ou landing creada con IA",
  "Automatización funcionando",
  "Imaxes e vídeos creados para un proxecto propio",
  "Sistema persoal de produtividade con IA",
  "Novas habilidades dixitais para emprego remoto",
  "Nova rede de conexión e amizade",
  "Experiencia transformadora en Anceu Coliving",
];

const impact = [
  "Inclusión dixital accesible",
  "Novas oportunidades profesionais",
  "Conexión Galicia–Portugal",
  "Rural como espazo tecnolóxico e creativo",
  "Construcción de comunidade viva",
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
              Resultados
            </h2>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-lg"
                >
                  <span className="text-foreground mt-1">✓</span>
                  {result}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">
              Impacto
            </h2>
            <ul className="space-y-4">
              {impact.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-lg"
                >
                  <span className="text-foreground mt-1">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
