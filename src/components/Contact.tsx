import { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consultoria gratuita com a Meireles Assessoria Contábil."
  );

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@meireles.com.br",
      action: "mailto:contato@meireles.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo/SP",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 8h às 18h",
      action: null
    }
  ];

  const services = [
    "Contabilidade Empresarial",
    "Assessoria Tributária", 
    "Consultoria Financeira",
    "Departamento Pessoal",
    "Abertura de Empresas",
    "Compliance & LGPD",
    "Outro"
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <MessageSquare size={16} className="mr-2 text-accent" />
            <span className="text-accent font-medium">Entre em Contato</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Pronto para Transformar
            <span className="text-accent"> sua Contabilidade?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Agende uma consultoria gratuita e descubra como podemos 
            otimizar a gestão da sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Solicite uma Consultoria Gratuita</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Conte-nos mais sobre suas necessidades..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-accent w-full group"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <Card className="bg-accent text-accent-foreground shadow-xl">
              <CardContent className="p-6 text-center">
                <MessageSquare size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Atendimento Imediato</h3>
                <p className="mb-6 opacity-90">
                  Fale conosco agora pelo WhatsApp e tire suas dúvidas em tempo real.
                </p>
                <Button 
                  asChild
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 w-full"
                >
                  <a 
                    href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={20} className="mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg flex-shrink-0">
                          <IconComponent size={20} className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">{info.title}</h4>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-muted-foreground hover:text-accent transition-colors"
                              target={info.action.startsWith('http') ? '_blank' : undefined}
                              rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.info}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{info.info}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Por que nos escolher?</h3>
                <div className="space-y-3">
                  {[
                    "Consultoria gratuita inicial",
                    "Atendimento personalizado",
                    "Tecnologia de ponta",
                    "Equipe especializada",
                    "Suporte contínuo"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;