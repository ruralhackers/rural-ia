import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { trackFormButtonClick } from "@/lib/analytics";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-32 bg-[#19ab9b] text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Únete a Rural IA
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-background/70 max-w-2xl mx-auto">
            En só 3 días, aprende a usar IA de forma útil, crea proxectos reais e descobre que 
            podes traballar desde calquera sitio —incluída unha aldea como Anceu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-none" asChild>
              <a 
                href="https://forms.gle/65nJ3P8x3azdiem9A" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackFormButtonClick("Solicita a túa praza - CTA")}
              >
                Solicita a túa praza
              </a>
            </Button>
            <div className="text-background/70">
              <p className="text-sm">15 prazas dispoñibles</p>
              <p className="text-sm">Ata 30 anos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
