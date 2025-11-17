import { Target, TrendingUp, Clock, Shield } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Plano Personalizado",
      description: "Estratégia nutricional adaptada aos seus objetivos e estilo de vida",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Resultados Sustentáveis",
      description: "Mudanças duradouras com base em hábitos saudáveis",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Acompanhamento Contínuo",
      description: "Suporte constante via WhatsApp durante todo o processo",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Abordagem Científica",
      description: "Métodos baseados em evidências e nutrição funcional",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Por Que Escolher o Helber?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que um nutricionista, um parceiro na sua jornada de saúde
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const bgColorClass = benefit.color === 'primary' ? 'bg-primary-10' : 
                                benefit.color === 'secondary' ? 'bg-secondary-10' : 'bg-accent-10';
            const iconColorClass = benefit.color === 'primary' ? 'text-primary' : 
                                   benefit.color === 'secondary' ? 'text-secondary' : 'text-accent';
            
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              >
                <div className={`${bgColorClass} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${iconColorClass}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
