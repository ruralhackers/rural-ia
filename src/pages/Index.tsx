import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import Schedule from "@/components/Schedule";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Objectives />
      <Schedule />
      <Tools />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
