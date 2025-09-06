import { useEffect } from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Nossos Serviços - Meireles Assessoria Contábil";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Conheça todos os serviços da Meireles Assessoria Contábil: contabilidade empresarial, planejamento tributário, consultoria financeira, departamento pessoal e muito mais.'
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default ServicesPage;