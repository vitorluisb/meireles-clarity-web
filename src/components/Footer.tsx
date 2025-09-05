import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Meireles Assessoria Contábil."
  );

  const services = [
    "Contabilidade Empresarial",
    "Assessoria Tributária",
    "Consultoria Financeira", 
    "Departamento Pessoal",
    "Abertura de Empresas",
    "Compliance & LGPD"
  ];

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Meireles</h3>
                <p className="text-sm text-primary-foreground/80 -mt-1">Assessoria Contábil</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transformando a gestão contábil de empresas há mais de 15 anos, 
              com inovação, tecnologia e atendimento de excelência.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="font-medium mb-4">Fale Conosco</h5>
              <a
                href={`https://wa.me/5511999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-accent rounded-lg hover:bg-accent/90 transition-colors"
              >
                <MessageSquare size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a 
                    href="tel:+5511999999999"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a 
                    href="mailto:contato@meireles.com.br"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    contato@meireles.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-primary-foreground/80">
                    Av. Paulista, 1000<br />
                    São Paulo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Meireles Assessoria Contábil. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Política de Privacidade
              </button>
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Termos de Uso
              </button>
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                LGPD
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;