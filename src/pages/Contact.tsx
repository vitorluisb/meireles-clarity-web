import { useEffect } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Building,
  Users,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Map from '@/components/Map';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contato - Meireles Assessoria Contábil";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Entre em contato com a Meireles Assessoria Contábil. Atendimento via WhatsApp, localização no centro de São Paulo. Agende sua consultoria gratuita agora!'
      );
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consultoria gratuita com a Meireles Assessoria Contábil."
  );

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999",
      action: "tel:+5511999999999",
      description: "Atendimento de Segunda a Sexta"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@meireles.com.br",
      action: "mailto:contato@meireles.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo/SP",
      action: "https://maps.google.com/?q=Av.+Paulista,+1000,+São+Paulo",
      description: "Centro financeiro de São Paulo"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h",
      action: null,
      description: "Atendimento presencial e online"
    }
  ];

  const advantages = [
    {
      icon: Building,
      title: "Escritório Estratégico",
      description: "Localizado na principal avenida financeira de São Paulo, oferecendo fácil acesso e credibilidade para nossos clientes."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e certificados, dedicados a fornecer soluções contábeis personalizadas para cada tipo de negócio."
    },
    {
      icon: Shield,
      title: "Segurança e Confidencialidade",
      description: "Tratamento seguro e sigiloso de todas as informações empresariais, seguindo rigorosamente as normas de proteção de dados."
    },
    {
      icon: Star,
      title: "Atendimento Diferenciado",
      description: "Suporte personalizado e proativo, com foco na satisfação do cliente e no crescimento sustentável do seu negócio."
    }
  ];

  const benefits = [
    "Consultoria gratuita inicial de 30 minutos",
    "Atendimento personalizado e dedicado",
    "Relatórios gerenciais mensais detalhados", 
    "Suporte contínuo via WhatsApp",
    "Equipe com mais de 15 anos de experiência",
    "Localização privilegiada na Av. Paulista",
    "Processos otimizados e eficientes",
    "Compliance total com legislação vigente"
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
                <MessageSquare size={16} className="mr-2 text-accent" />
                <span className="text-accent font-medium">Entre em Contato</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transforme sua Empresa com 
                <span className="text-accent"> Assessoria Especializada</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Localizada no coração financeiro de São Paulo, a Meireles Assessoria Contábil 
                oferece soluções contábeis completas e personalizadas para impulsionar o crescimento 
                do seu negócio. Nossa equipe de especialistas está pronta para atendê-lo com 
                excelência e dedicação.
              </p>
              
              {/* WhatsApp CTA Principal */}
              <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-2xl p-8 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Atendimento Imediato via WhatsApp</h3>
                    <p className="opacity-90">
                      Tire suas dúvidas agora mesmo e agende sua consultoria gratuita. 
                      Nossa equipe está online para atendê-lo!
                    </p>
                  </div>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-8 py-4 text-lg font-semibold"
                  >
                    <a 
                      href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare size={24} className="mr-3" />
                      Falar Agora no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              {/* Informações de Contato */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Como nos Encontrar</h2>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl flex-shrink-0">
                              <IconComponent size={24} className="text-accent" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                              {info.action ? (
                                <a 
                                  href={info.action}
                                  className="text-accent hover:text-accent/80 transition-colors font-medium text-lg block mb-2"
                                  target={info.action.startsWith('http') ? '_blank' : undefined}
                                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                  {info.info}
                                </a>
                              ) : (
                                <span className="text-lg font-medium block mb-2">{info.info}</span>
                              )}
                              <p className="text-muted-foreground">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Mapa */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Nossa Localização</h2>
                <Map />
                <Card className="mt-6 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Por que a Av. Paulista?</h4>
                    <p className="text-muted-foreground">
                      Nossa localização estratégica no principal centro financeiro de São Paulo 
                      nos permite atender clientes de toda a região metropolitana com facilidade. 
                      Estamos próximos a bancos, órgãos governamentais e principais empresas, 
                      facilitando a resolução de demandas urgentes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Vantagens */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Por que Escolher a Meireles?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {advantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="p-6 text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mx-auto mb-4">
                          <IconComponent size={28} className="text-accent" />
                        </div>
                        <h4 className="font-bold text-lg mb-3">{advantage.title}</h4>
                        <p className="text-muted-foreground text-sm">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Benefícios */}
            <Card className="shadow-xl bg-muted/50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8">O que Você Ganha Conosco</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-accent flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button 
                    asChild
                    size="lg"
                    className="btn-accent px-8 py-4 text-lg"
                  >
                    <a 
                      href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare size={20} className="mr-2" />
                      Agendar Consultoria Gratuita
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default ContactPage;