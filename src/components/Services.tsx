import { Button } from "@/components/ui/button";
import { Video, MapPin, Calendar, MessageCircle } from "lucide-react";
import consultationImage from "@/assets/consultation.jpg";

const WHATSAPP_URL = "https://wa.me/5532999922371?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o%20nutricional.%20Voc%C3%AA%20poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F";

export const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Como Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento flexível e personalizado para se adequar à sua rotina
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-soft)] transition-shadow">
            <div className="bg-primary-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Video className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Consulta Online</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Atendimento por videochamada com toda a qualidade e atenção que você precisa, 
              no conforto da sua casa.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                Flexibilidade de horários
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                Acompanhamento via WhatsApp
              </li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-soft)] transition-shadow">
            <div className="bg-secondary-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Consulta Presencial</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Atendimento personalizado em consultório equipado com avaliação completa 
              de composição corporal.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-secondary" />
                Avaliação física completa
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-secondary" />
                Bioimpedância e medidas
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src={consultationImage} 
            alt="Consulta nutricional"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-3xl font-bold mb-4">Pronto para começar sua transformação?</h3>
              <Button 
                size="lg" 
                variant="cta"
                className="gap-3"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Minha Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
