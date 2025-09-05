import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Shield, 
  Smartphone,
  Building,
  PieChart,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Empresarial",
      description: "Gestão completa da contabilidade com foco em compliance e otimização fiscal.",
      features: ["Escrituração fiscal", "Balancetes mensais", "Demonstrações financeiras"]
    },
    {
      icon: FileText,
      title: "Assessoria Tributária",
      description: "Planejamento e consultoria tributária especializada para redução legal de custos.",
      features: ["Planejamento tributário", "Análise de regimes", "Revisão de tributos"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Financeira",
      description: "Análises estratégicas para crescimento sustentável e tomada de decisões.",
      features: ["Análise de viabilidade", "Fluxo de caixa", "Indicadores de performance"]
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de recursos humanos e folha de pagamento.",
      features: ["Folha de pagamento", "Admissões e demissões", "Obrigações trabalhistas"]
    },
    {
      icon: Building,
      title: "Abertura de Empresas",
      description: "Constituição empresarial ágil com toda documentação necessária.",
      features: ["Registro na Junta Comercial", "Alvarás e licenças", "Enquadramento fiscal"]
    },
    {
      icon: Shield,
      title: "Compliance & LGPD",
      description: "Conformidade regulatória e adequação à Lei Geral de Proteção de Dados.",
      features: ["Auditoria de compliance", "Implementação LGPD", "Políticas internas"]
    }
  ];

  const differentials = [
    {
      icon: Smartphone,
      title: "Tecnologia Avançada",
      description: "Plataforma digital integrada para gestão em tempo real"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Respostas rápidas e processos otimizados"
    },
    {
      icon: PieChart,
      title: "Relatórios Inteligentes",
      description: "Dashboard com indicadores estratégicos personalizados"
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Soluções Completas para 
            <span className="text-accent"> seu Negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos um portfólio abrangente de serviços contábeis e consultoria 
            empresarial com foco em resultados e inovação.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-hover group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Por que somos diferentes?
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Nossa abordagem combina expertise tradicional com inovação tecnológica 
              para entregar resultados excepcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-4">
                    <IconComponent size={28} className="text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{differential.title}</h4>
                  <p className="text-primary-foreground/80">{differential.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;