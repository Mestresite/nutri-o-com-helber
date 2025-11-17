import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(10, "Telefone inválido").max(20),
  age: z.string().min(1, "Idade é obrigatória"),
  weight: z.string().min(1, "Peso é obrigatório"),
  height: z.string().min(1, "Altura é obrigatória"),
  goal: z.string().min(1, "Selecione um objetivo"),
  activityLevel: z.string().min(1, "Selecione o nível de atividade"),
  restrictions: z.string().max(500),
  message: z.string().max(1000),
});

type FormData = z.infer<typeof formSchema>;

export const PreAssessmentForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      weight: "",
      height: "",
      goal: "",
      activityLevel: "",
      restrictions: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const message = `*Pré-Avaliação Nutricional*

*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone}
*Idade:* ${data.age} anos
*Peso:* ${data.weight} kg
*Altura:* ${data.height} cm
*Objetivo:* ${data.goal}
*Nível de Atividade:* ${data.activityLevel}
*Restrições Alimentares:* ${data.restrictions || "Nenhuma"}
*Mensagem:* ${data.message || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5532999922371?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Formulário enviado!",
      description: "Você será redirecionado para o WhatsApp para finalizar o agendamento.",
    });
    
    form.reset();
  };

  return (
    <section id="formulario" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Pré-Avaliação Nutricional
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo para que eu possa conhecer melhor seu perfil e objetivos
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo *</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone *</FormLabel>
                        <FormControl>
                          <Input placeholder="(32) 99999-9999" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Idade *</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Sua idade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Peso Atual (kg) *</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" placeholder="Ex: 70.5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Altura (cm) *</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Ex: 170" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objetivo Principal *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione seu objetivo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="perda-peso">Perda de Peso</SelectItem>
                            <SelectItem value="ganho-massa">Ganho de Massa Muscular</SelectItem>
                            <SelectItem value="saude">Melhoria da Saúde</SelectItem>
                            <SelectItem value="performance">Performance Esportiva</SelectItem>
                            <SelectItem value="manutencao">Manutenção</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="activityLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nível de Atividade Física *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sedentario">Sedentário</SelectItem>
                            <SelectItem value="leve">Leve (1-2x/semana)</SelectItem>
                            <SelectItem value="moderado">Moderado (3-4x/semana)</SelectItem>
                            <SelectItem value="intenso">Intenso (5-6x/semana)</SelectItem>
                            <SelectItem value="muito-intenso">Muito Intenso (diário)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="restrictions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Restrições ou Alergias Alimentares</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Intolerância à lactose, alergia a amendoim..."
                          className="resize-none"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Informações Adicionais</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte um pouco mais sobre sua rotina, hábitos alimentares ou dúvidas..."
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="cta"
                    className="gap-3 flex-1"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enviar Avaliação pelo WhatsApp
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Seus dados serão enviados de forma segura via WhatsApp.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
