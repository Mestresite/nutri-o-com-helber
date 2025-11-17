import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5532999922371?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o%20nutricional.%20Voc%C3%AA%20poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dê o Primeiro Passo Hoje
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Agende sua consulta de avaliação e descubra como a nutrição pode transformar sua vida
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="cta"
              className="gap-3 text-lg"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </Button>
            
            <Button 
              size="lg" 
              className="gap-3 text-lg bg-white text-primary hover:bg-white/90"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <Phone className="w-6 h-6" />
              (32) 99992-2371
            </Button>
          </div>
          
          <p className="text-white/80 mt-6">
            Atendimento rápido e personalizado • Horários flexíveis
          </p>
        </div>
      </div>
    </section>
  );
};
