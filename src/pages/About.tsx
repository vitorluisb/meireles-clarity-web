import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const AboutPage = () => {
  useEffect(() => {
    document.title = "Sobre Nós - Meireles Assessoria Contábil";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Conheça a história da Meireles Assessoria Contábil. Mais de 15 anos de experiência em contabilidade empresarial, planejamento tributário e consultoria financeira em São Paulo.'
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default AboutPage;