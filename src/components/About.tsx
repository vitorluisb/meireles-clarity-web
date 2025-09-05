import { Award, Target, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import consultationImage from '@/assets/consultation.jpg';
import technologyImage from '@/assets/technology.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada estratégia é desenvolvida com objetivos claros e mensuráveis para maximizar o sucesso do seu negócio."
    },
    {
      icon: Heart,
      title: "Relacionamento Próximo", 
      description: "Construímos parcerias duradouras, conhecendo profundamente cada cliente e suas necessidades específicas."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Investimos continuamente em tecnologia e capacitação para oferecer as melhores soluções do mercado."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Nossa equipe é formada por profissionais altamente qualificados e em constante atualização."
    }
  ];

  const stats = [
    { number: "15+", label: "Anos no Mercado", description: "Experiência consolidada" },
    { number: "500+", label: "Empresas Atendidas", description: "Diversos segmentos" },
    { number: "50+", label: "Profissionais", description: "Equipe especializada" },
    { number: "98%", label: "Satisfação", description: "Clientes recomendam" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-medium">Sobre a Meireles</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tradição e Inovação em 
            <span className="text-accent"> Contabilidade</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Há mais de 15 anos transformando a gestão contábil de empresas com 
            soluções inovadoras e atendimento de excelência.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Nossa História de Sucesso
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Meireles Assessoria Contábil nasceu da visão de revolucionar o mercado 
                contábil brasileiro, combinando a solidez da contabilidade tradicional 
                com as possibilidades da era digital.
              </p>
              <p>
                Desde nossa fundação, temos como missão ser mais que um escritório 
                contábil - somos parceiros estratégicos no crescimento sustentável 
                dos nossos clientes.
              </p>
              <p>
                Nossa abordagem inovadora e foco em relacionamentos duradouros nos 
                permitiu crescer consistentemente, sempre mantendo a qualidade e 
                personalização no atendimento.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold mb-2">Nossa Missão</h4>
                <p className="text-muted-foreground">
                  Simplificar a gestão contábil e fiscal das empresas através de 
                  soluções inovadoras, promovendo crescimento e tranquilidade.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-2">Nossa Visão</h4>
                <p className="text-muted-foreground">
                  Ser referência nacional em assessoria contábil digital, 
                  reconhecida pela excelência e inovação.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={consultationImage}
              alt="Consultoria especializada Meireles"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Empresas Atendidas</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Nossos Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam todas as nossas ações e decisões, 
              construindo relacionamentos sólidos e resultados excepcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mx-auto mb-4">
                      <IconComponent size={24} className="text-accent" />
                    </div>
                    <h4 className="font-semibold mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats & Experience */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Resultados que Falam
            </h3>
            <p className="text-muted-foreground mb-8">
              Nossa experiência e dedicação se refletem nos números e na 
              satisfação dos nossos clientes ao longo dos anos.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={technologyImage}
              alt="Equipe especializada em contabilidade"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-xl font-bold">15+</div>
              <div className="text-sm">Anos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;