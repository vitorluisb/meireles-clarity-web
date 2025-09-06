import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Home = () => {
  useEffect(() => {
    document.title = "Meireles Assessoria Contábil - Contabilidade Moderna e Estratégica";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Assessoria contábil especializada em São Paulo. Contabilidade empresarial, planejamento tributário e consultoria financeira. Agende sua consultoria gratuita!'
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Home;