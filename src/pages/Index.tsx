import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Meireles Assessoria Contábil - Contabilidade Moderna e Estratégica";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Assessoria contábil especializada em São Paulo. Contabilidade empresarial, planejamento tributário e consultoria financeira com tecnologia de ponta. Agende sua consultoria gratuita!'
      );
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "Meireles Assessoria Contábil",
      "description": "Assessoria contábil moderna e estratégica para empresas",
      "url": window.location.origin,
      "telephone": "+5511999999999",
      "email": "contato@meireles.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paulista, 1000",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -23.5558,
          "longitude": -46.6396
        },
        "geoRadius": "50000"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
