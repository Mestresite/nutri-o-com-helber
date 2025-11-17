import { GraduationCap, Heart, Users } from "lucide-react";
import helberPhoto from "@/assets/helber-photo.png";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Conheça o
              <span className="block text-primary">Helber Ferreira Lima</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nutricionista formado pela renomada Universidade Federal de Juiz de Fora (UFJF), 
              com especialização em nutrição clínica e esportiva.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary-10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Formação Acadêmica</h3>
                  <p className="text-muted-foreground">Graduado em Nutrição pela UFJF</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-secondary-10 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atendimento Humanizado</h3>
                  <p className="text-muted-foreground">Planos nutricionais personalizados e acompanhamento contínuo</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-accent-10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Resultados Comprovados</h3>
                  <p className="text-muted-foreground">Centenas de pacientes transformados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <img 
                src={helberPhoto} 
                alt="Helber Ferreira Lima - Nutricionista"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
