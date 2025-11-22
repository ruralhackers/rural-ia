import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  {
    day: "Día 1",
    date: "28 Novembro",
    title: "Benvida e primeiros pasos con IA",
    activities: [
      "Chegada e dinámica de apertura",
      "Introdución a modelos IA: Qwen, Claude, Deepseek",
      "Primeiros experimentos prácticos",
      "Cea comunitaria e paseo ou actividade tranquila",
    ],
  },
  {
    day: "Día 2",
    date: "29 Novembro",
    title: "Crear con IA: webs, imaxe e contido",
    activities: [
      "Creación web con Bolt e Lovable",
      "Deseño visual con Trae",
      "Microproxecto: landing en 2 horas",
      "Taller de imaxe e vídeo con Flux Kontext",
      "Paseo pola natureza e convivencia",
    ],
  },
  {
    day: "Día 3",
    date: "30 Novembro",
    title: "Automatizar con IA",
    activities: [
      "Obradoiro N8n: primeira automatización",
      "Zapier para fluxos sinxelos",
      "Mentorización personalizada",
      "Presentación de proxectos",
      "Cea final comunitaria",
    ],
  },
  {
    day: "Día 4",
    date: "1 Decembro",
    title: "Saída",
    activities: ["Almorzo, peche e despedida"],
  },
];

const Program = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
        >
          Programa
        </motion.h2>
        <div className="space-y-20 max-w-5xl">
          {schedule.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-l-2 border-foreground pl-8 relative"
            >
              <div className="absolute -left-3 top-0 w-5 h-5 bg-foreground rounded-full" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
                <span className="text-sm font-bold uppercase tracking-wider">{day.day}</span>
                <span className="text-sm text-muted-foreground">{day.date}</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">{day.title}</h3>
              <ul className="space-y-3">
                {day.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="text-lg text-muted-foreground flex items-start gap-3">
                    <span className="text-foreground mt-1">—</span>
                    {activity}
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

export default Program;
