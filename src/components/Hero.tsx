import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-office.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Meireles Assessoria Contábil."
  );

  const benefits = [
    "Consultoria especializada",
    "Experiência comprovada",
    "Atendimento personalizado"
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório moderno de contabilidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-primary-foreground">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full backdrop-blur-sm">
              <TrendingUp size={16} className="mr-2 text-accent" />
              <span className="text-sm font-medium">Excelência em Contabilidade</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transforme sua
                <span className="text-accent block">Contabilidade</span>
                para o Futuro
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-lg">
                Assessoria contábil moderna e estratégica para empresas que buscam 
                crescimento sustentável e conformidade total.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="btn-hero group"
              >
                Solicitar Consultoria
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a 
                  href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/70">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/70">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/70">Satisfação Cliente</div>
              </div>
            </div>
          </div>

          {/* Right Side - Could be additional content or kept minimal */}
          <div className="hidden lg:block">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Por que escolher a Meireles?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Experiência Sólida</h4>
                    <p className="text-sm text-primary-foreground/70">
                      Mais de 15 anos de expertise em contabilidade
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Expertise Comprovada</h4>
                    <p className="text-sm text-primary-foreground/70">
                      Equipe especializada em todos os segmentos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium">Atendimento Personalizado</h4>
                    <p className="text-sm text-primary-foreground/70">
                      Cada cliente recebe atenção exclusiva
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;