import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-nutrition.jpg";

const WHATSAPP_URL = "https://wa.me/5532999922371?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o%20nutricional.%20Voc%C3%AA%20poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Transforme sua
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              saúde e bem-estar
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Acompanhamento nutricional personalizado para alcançar seus objetivos com saúde e equilíbrio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="cta"
              className="gap-3"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
