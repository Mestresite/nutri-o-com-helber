import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { PreAssessmentForm } from "@/components/PreAssessmentForm";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <PreAssessmentForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
