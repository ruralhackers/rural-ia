import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
            Unha inmersión de 3 días
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Rural IA é unha experiencia transformadora en Anceu Coliving para 15 mozos e mozas 
              que queiran aprender intelixencia artificial dun xeito práctico, creativo e humano.
            </p>
            <p>
              A formación baséase en probar ferramentas, crear proxectos reais e aprender facendo. 
              A convivencia, a natureza e a gastronomía completan unha experiencia única.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
