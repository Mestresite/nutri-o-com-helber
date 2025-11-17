import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Helber Ferreira Lima</h3>
            <p className="text-muted-foreground">Nutricionista • CRN XXXX</p>
            <p className="text-sm text-muted-foreground mt-1">
              Formado pela Universidade Federal de Juiz de Fora
            </p>
          </div>
          
          <div className="text-center text-muted-foreground flex items-center gap-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para sua saúde</span>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
          © {new Date().getFullYear()} Helber Ferreira Lima - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};
