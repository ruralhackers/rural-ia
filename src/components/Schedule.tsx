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
  day3?: string;
  day4?: string;
  rowspan?: number;
}

const scheduleData: TimeSlot[] = [
  {
    time: "09:00-10:30",
    label: "Almorzo",
    day0: "ARRIVALS",
    day1: "Almorzo",
    day2: "Almorzo",
    day3: "Almorzo",
    day4: "",
  },
  {
    time: "10:30-12:30",
    label: "Sesión de traballo",
    day0: "ARRIVALS",
    day1: "Anceu Free Tour: Hackeando o monte",
    day2: "Inspiración Tech dende Portugal",
    day3: "",
    day4: "DEPARTURES",
  },
  {
    time: "",
    label: "Breaks",
    day0: "Café Benvida/Onboarding",
    day1: "Break",
    day2: "Inspiración Tech dende Portugal",
    day3: "",
    day4: "",
  },
  {
    time: "12:30-14:00",
    label: "Sesión de traballo",
    day0: "Rural Hackers: Transformando aldeas con tecnoloxía",
    day1: "Xerando imaxes coa IA: Aboas Ciberpunks",
    day2: "Inspiración Tech dende Portugal",
    day3: "",
    day4: "",
  },
  {
    time: "14:00-16:00",
    label: "Xantar",
    day0: "Xantar colectivo",
    day1: "Xantar colectivo",
    day2: "Xantar colectivo",
    day3: "",
    day4: "",
  },
  {
    time: "16:00-18:00",
    label: "Sesión de traballo",
    day0: "AI Playground: Dende un Prompt a un Proxecto",
    day1: "De 'non teño nin idea' a 'mira a miña web' en só unhas horas",
    day2: "No-Code, No-Drama: que a máquina curre por ti",
    day3: "",
    day4: "",
  },
  {
    time: "18:00-20:30",
    label: "Tempo colectivo",
    day0: "Tempo colectivo",
    day1: "Tempo colectivo",
    day2: "Tempo colectivo",
    day3: "",
    day4: "",
  },
  {
    time: "20:30-21:30",
    label: "Cea",
    day0: "Cea",
    day1: "Cea",
    day2: "Cea",
    day3: "",
    day4: "",
  },
];

const days = [
  { id: "day0", title: "Día 0", subtitle: "Ven 28.11" },
  { id: "day1", title: "Día 1", subtitle: "Sab 29.11" },
  { id: "day2", title: "Day 3", subtitle: "Dom 30.11" },
  { id: "day3", title: "Día 4", subtitle: "Lun 1.12" },
];

// Configuración de rowspans: qué celdas ocupan múltiples filas
const rowspanConfig: Record<string, Record<number, number>> = {
  day0: { 0: 2 }, // ARRIVALS ocupa filas 0-1 (09:00-12:30)
  day2: { 1: 3 }, // Inspiración Tech dende Portugal ocupa filas 1-3 (10:30-14:00: Sesión 1 + Breaks + Sesión 2)
  day3: { 1: 7 }, // DEPARTURES ocupa desde la fila 1 hasta la 7 (10:30-21:30)
};

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-muted/30 text-[#014a9b]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter"
        >
          Axenda
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
                        className={`border border-border p-4 ${cellValue ? 'hover:bg-[#d45c9d]/50 transition-colors' : ''}`}
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

