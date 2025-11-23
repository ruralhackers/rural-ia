import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { trackFormButtonClick } from "@/lib/analytics";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <img 
            src="/logo.svg" 
            alt="Rural IA" 
            className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light"
        >
          Creatividade, Automatización e Futuro Dixital dende o Rural
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-lg px-8 py-6 rounded-none" asChild>
            <a 
              href="https://forms.gle/65nJ3P8x3azdiem9A" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackFormButtonClick("Inscríbete Agora - Hero")}
            >
              Inscríbete Agora
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            28 Nov - 1 Dec · Anceu Coliving · 15 prazas
          </p>
        </motion.div>
      </motion.div>

      {/* Parallax background elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
        className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
