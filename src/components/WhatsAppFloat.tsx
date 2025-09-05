import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip briefly after button appears
      setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after a few seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim do site e gostaria de saber mais sobre os serviços da Meireles Assessoria Contábil. Podem me ajudar?"
  );

  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 mb-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
              aria-label="Fechar tooltip"
            >
              <X size={12} className="text-primary-foreground" />
            </button>
            <p className="text-sm font-medium mb-1">
              Olá! 👋
            </p>
            <p className="text-xs text-primary-foreground/90">
              Precisa de ajuda com sua contabilidade? Clique aqui e fale conosco!
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      </a>

      {/* Availability indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
    </div>
  );
};

export default WhatsAppFloat;