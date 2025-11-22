import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import Program from "@/components/Program";
import Tools from "@/components/Tools";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Objectives />
      <Program />
      <Tools />
      <Results />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
