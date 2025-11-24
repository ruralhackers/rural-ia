import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { trackMapsLinkClick } from "@/lib/analytics";

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
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter text-[#014a9b]">
            Unha inmersión de 3 días
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed text-[#014a9b]">
            <p>
              Rural IA é unha experiencia transformadora en Anceu Coliving para <br /> 
              <strong>15 mozos e mozas menores de 30 anos </strong> <br/>
              que queiran aprender intelixencia artificial dun xeito práctico, creativo e humano.
            </p>
            <p>
              A formación baséase en probar ferramentas, crear proxectos reais e aprender facendo. 
              A convivencia, a natureza e a gastronomía completan unha experiencia única.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-[#014a9b]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-border p-8 hover:border-foreground transition-colors group"
            >
              <h3 className=" text-[#014a9b] text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                De balde
              </h3>
              <p className="text-lg">Totalmente gratuíto. Non tes que pagar nada por participar.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-border p-8 hover:border-foreground transition-colors group"
            >
              <h3 className=" text-[#014a9b] text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                Inclúe
              </h3>
              <p className="text-lg">Formación en IA, estancia en Anceu Coliving e todas as comidas: almorzo, xantar e cea.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-border p-8 hover:border-foreground transition-colors group"
            >
              <h3 className=" text-[#014a9b] text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                Non inclúe
              </h3>
              <p className="text-lg">Transporte ata Anceu. Organiza a túa viaxe por conta propia.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-border p-8 hover:border-foreground transition-colors group"
            >
              <h3 className=" text-[#014a9b] text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground group-hover:text-foreground transition-colors">
                Localización
              </h3>
              <p className="text-lg">
                <a 
                  href="https://maps.app.goo.gl/Y6x2kFm2bmqvobE76" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                  onClick={() => trackMapsLinkClick("Anceu Coliving")}
                >
                  Anceu Coliving, Anceu, Galicia
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
