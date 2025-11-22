import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TimeSlot {
  time: string;
  label: string;
  day0?: string;
  day1?: string;
  day2?: string;
  day8?: string;
  rowspan?: number;
}

const scheduleData: TimeSlot[] = [
  {
    time: "08:30-09:30",
    label: "Almorzo",
    day0: "Chegadas",
    day1: "Almorzo",
    day2: "Almorzo",
    day8: "Almorzo",
  },
  {
    time: "09:30-11:00",
    label: "Sesión 1",
    day0: "",
    day1: "Rural Talks: Histórias de futuro dende as aldeas",
    day2: "Inspiración tech dende Portugal",
    day8: "SAÍDAS",
    rowspan: 1,
  },
  {
    time: "",
    label: "Pausas",
    day0: "Pausa",
    day1: "Pausa",
    day2: "Pausa",
    day8: "",
  },
  {
    time: "11:30-13:00",
    label: "Sesión 2",
    day0: "Aldeas Hackeadas: futuro dixital dende o monte",
    day1: "AI Playground: Dende un Prompt a un Proxecto",
    day2: "No-Code, No-Drama: que a máquina curre por ti",
    day8: "",
  },
  {
    time: "13:00-14:30",
    label: "Xantar",
    day0: "Xantar Anceu por Se",
    day1: "Xantar Anceu por Se",
    day2: "Xantar Anceu por Se",
    day8: "",
  },
  {
    time: "14:30-16:00",
    label: "Sesión 3",
    day0: "Avoas Cyberpunks e galiñas mutantes: Xenerando coa IA Xenerativa",
    day1: "De 'non teño nin idea' a 'mira a miña web' en só unhas horas",
    day2: "No-Code, No-Drama: que a máquina curre por ti",
    day8: "",
  },
  {
    time: "16:30-17:30",
    label: "Sesión 4",
    day0: "",
    day1: "",
    day2: "",
    day8: "",
  },
  {
    time: "19:30",
    label: "Cea colectiva",
    day0: "Cea colectiva",
    day1: "Cea colectiva",
    day2: "Cea colectiva",
    day8: "",
  },
  {
    time: "20:30+",
    label: "Noite",
    day0: "Noites",
    day1: "Plans nocturnos en equipo",
    day2: "Plans nocturnos en equipo",
    day8: "",
  },
];

const days = [
  { id: "day0", title: "Día 0", subtitle: "Ven 28.11" },
  { id: "day1", title: "Día 1", subtitle: "Sáb 29.11" },
  { id: "day2", title: "Día 2", subtitle: "Dom 30.11" },
  { id: "day8", title: "Día 8", subtitle: "Lun 1.12" },
];

// Configuración de rowspans: qué celdas ocupan múltiples filas
const rowspanConfig: Record<string, Record<number, number>> = {
  day0: { 0: 2, 5: 2 }, // Chegadas (filas 0-1) y Sesión 3 (filas 5-6) ocupan 2 filas
  day1: { 5: 2 }, // Sesión 3 ocupa las filas 5 y 6 (14:30-17:30)
  day2: { 5: 2 }, // Sesión 3 ocupa las filas 5 y 6 (14:30-17:30)
  day8: { 1: 8 }, // SAÍDAS ocupa desde la fila 1 hasta la 8 (09:30-20:30+)
};

const Schedule = () => {
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
          Horarios
        </motion.h2>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr>
                <th className="border border-border bg-muted p-4 text-left font-bold">
                  Hora/Data
                </th>
                {days.map((day) => (
                  <th key={day.id} className="border border-border bg-muted p-4 text-center font-bold">
                    <div>{day.title}</div>
                    <div className="text-sm font-normal text-muted-foreground">{day.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((slot, rowIndex) => (
                <tr key={`${slot.time}-${slot.label}`}>
                  <td className="border border-border bg-muted p-4 font-medium">
                    <div>{slot.time}</div>
                    {slot.label && (
                      <div className="text-sm text-muted-foreground">{slot.label}</div>
                    )}
                  </td>
                  {days.map((day) => {
                    const dayKey = day.id as keyof Omit<TimeSlot, 'time' | 'label' | 'rowspan'>;
                    const cellValue = slot[dayKey];
                    const rowspan = rowspanConfig[day.id]?.[rowIndex] || 1;
                    
                    // Verificar si esta celda está cubierta por un rowspan anterior
                    let isSkipped = false;
                    for (let i = rowIndex - 1; i >= 0; i--) {
                      const prevRowspan = rowspanConfig[day.id]?.[i] || 1;
                      if (prevRowspan > 1 && i + prevRowspan > rowIndex) {
                        isSkipped = true;
                        break;
                      }
                    }
                    
                    if (isSkipped) return null;
                    
                    return (
                      <td 
                        key={day.id}
                        className={`border border-border p-4 ${cellValue ? 'hover:bg-muted/50 transition-colors' : ''}`}
                        rowSpan={rowspan}
                      >
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Accordion View */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {days.map((day) => {
              const dayKey = day.id as keyof Omit<TimeSlot, 'time' | 'label' | 'rowspan'>;
              const daySlots = scheduleData.filter(slot => slot[dayKey]);
              
              return (
                <AccordionItem key={day.id} value={day.id}>
                  <AccordionTrigger className="text-xl font-bold">
                    <div className="flex flex-col items-start">
                      <span>{day.title}</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {day.subtitle}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {daySlots.map((slot) => (
                        <div
                          key={`${day.id}-${slot.time}-${slot.label}`}
                          className="border-l-2 border-border pl-4 py-2"
                        >
                          <div className="font-medium text-sm text-muted-foreground mb-1">
                            {slot.time} {slot.label && `· ${slot.label}`}
                          </div>
                          <div className="text-foreground">{slot[dayKey]}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;

